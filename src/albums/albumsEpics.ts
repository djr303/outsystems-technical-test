import { combineEpics } from "redux-observable";
import { asapScheduler, from } from "rxjs";
import { filter, map, mergeMap } from "rxjs/operators";

import {
  requestFolders,
  requestFoldersSuccess,
  requestFolder,
  requestFolderSuccess,
} from "./albumsReducer";

const requestFoldersEpic = (action$: any, state$: any, { folders }: any) =>
  action$.pipe(
    filter((action: any) => action.type === requestFolders),
    mergeMap((action: any) =>
      from(folders()).pipe(
        map((json: any) => ({ type: requestFoldersSuccess, payload: json }))
      )
    )
  );

const requestFolderEpic = (action$: any, state$: any, { folder }: any) =>
  action$.pipe(
    filter((action: any) => {
      if (action.type === requestFolder){
        const folder = state$.value.folders.find((e: any) => e.name === action.payload)
        return !folder.artists
      } else {
        return false;
      }
    }),
    mergeMap((action: any) => from(folder(action.payload)).pipe(
        map((json: any) => ({ type: requestFolderSuccess, payload: json }))
      )
    )
  );

export default combineEpics(requestFoldersEpic, requestFolderEpic);

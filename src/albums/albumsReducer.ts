/* type ImageDetails = {
  width: number;
  height: number;
  url: string;
  xResolution?: number;
  yResolution?: number;
};

type Images = {
  [id: number]: ImageDetails;
};

type ArtistDetails = {
  name: string;
  images: number[];
};

type Artist = {
  []: ArtistDetails;
};

type Folder = {
  name: string,
  artistsCount: number,
};
 */


/* type Albums = {
  folders: Folder[] | null;
  artists: Artist | null;
  images: Images | null;
};

// TODO: Do we need this type?
type RootState = {
  albums: Albums | null;
};
 */

const initialState: any = {
  folders: null,
  artists: null,
  images: null,
};

export const requestFolders = "requestFolders";
export const requestFoldersSuccess = "requestFoldersSuccess";
export const requestFolder = "requestFolder";
export const requestFolderSuccess = "requestFolderSuccess";
export const requestArtist = "requestArtist";
export const requestArtistSuccess = "requestArtistSuccess";

const albumsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case requestFoldersSuccess:
      return { ...state, folders: [...action.payload] };
    case requestFolderSuccess:
      const newFolder = action.payload;
      const folders = [ ...state.folders ];
      const idx = folders.findIndex((f: any) => f.name === newFolder.name);
      folders[idx].artists = [ ...newFolder.artists ];
      
      return { ...state, folders }
    default:
      return state;
  }
};

export default albumsReducer;

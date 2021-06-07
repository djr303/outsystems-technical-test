import React, { useEffect, useCallback } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { useDispatch, useSelector } from 'react-redux'

import Artist from '../../Display/Artist';
import ImageDetails from '../../Display/ImageDetails';
import Folders from '../../Display/Folders'

// TODO: Consider re-exporting actions from index.ta
import { requestFolders, requestFolder } from '../../../albums/albumsReducer';

import 'react-reflex/styles.css';
import './index.scss';
import { folder } from '../../../albums/api';

const artist = {
  id: 1,
  name: 'Jonny Rocket',
  portfolio:

    [
      {
        id: 793,
        width: 4592,
        height: 3448,
        url: "https://unsplash.com/photos/df47UDrfi8I",
        thumbnail: "https://picsum.photos/id/793/200"
      },
      {
        id: 798,
        width: 4592,
        height: 3448,
        url: "https://unsplash.com/photos/UvRMcIeXq9Y",
        thumbnail: "https://picsum.photos/id/798/200"
      },
      {
        id: 820,
        width: 4592,
        height: 3448,
        url: "https://unsplash.com/photos/ob6O_xd67O0",
        thumbnail: "https://picsum.photos/id/820/200"
      }
    ]
}

/* const folders = [
  {
    name: 'A',
    artists: [
      {
        name: 'Aler Tasdlihasd',
        photoCount: 10
      },
      {
        name: 'Ajoew Huasdhwe',
        photoCount: 10
      },
      {
        name: 'Abasduor Kowerd',
        photoCount: 10
      },
      {
        name: 'Anasdoue Troeurew',
        photoCount: 10
      },
    ]
  },
  {
    name: 'B',
    artists: [
      {
        name: 'Basdouer Joerur',
        photoCount: 10
      },
      {
        name: 'Basdoue Gasyewe',
        photoCount: 10
      },
      {
        name: 'Basiyer Joweuyer',
        photoCount: 10
      },
      {
        name: 'Bashdoosh Ouasdnasd',
        photoCount: 10
      },
    ]
  },
] */


const UIContainer: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: requestFolders })
  }, [])

  const folders = useSelector((state: any) => state.folders);

  const onFolderExpand = useCallback((folderName) => {
    dispatch({ type: requestFolder, payload: folderName })
  }, [])

  return (<main className="container">
    <ReflexContainer orientation="vertical">

      <ReflexElement>
        <div className="artist-container">
          <Artist name={artist.name} portfolio={artist.portfolio} />
        </div>
      </ReflexElement>

      <ReflexSplitter />

      <ReflexElement>
        <ReflexContainer orientation="horizontal">
          <ReflexElement >
            <div className="folders-container">
              { folders ? <Folders
                folders={folders}
                onFolderExpand={onFolderExpand}
              /> : null }
            </div>
          </ReflexElement>

          <ReflexSplitter />

          <ReflexElement >
            <div className="image-details-container">
              <ImageDetails 
                url="https://google.com/images/test-image.png"
                width={640}
                height={480}
                xResolution={72}
                yResolution={72} />
            </div>
          </ReflexElement>

        </ReflexContainer>
      </ReflexElement>

    </ReflexContainer>
  </main>)
}

export default UIContainer;
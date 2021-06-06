import React, { useState } from 'react';

import './index.scss';

type Artist = {
  name: string
  photoCount: number
}

type Folder = {
  name: string
  artists: Artist[]
}

interface FoldersProps {
  folders: Folder[]
}

const Folders: React.FC<FoldersProps> = ({ folders }) => {
  return (<ul className="folders">
    {folders.map((f: Folder) =>
      <li className="folder" key={f.name}>
        <div className="label">
          <img src="/images/open-folder.png" />
          <label>{f.name}</label>
        </div>
        {<ul className="artists">
          {f.artists.map((a: Artist) => <li key={a.name}>{a.name} ({a.photoCount} photos)</li>)}
        </ul>}
      </li>
    )}
  </ul>)
}


export default Folders
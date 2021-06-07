import React, { useState } from 'react';

import './index.scss';

type Artist = {
  name: string
  portfolioSize: number
}

type Folder = {
  name: string
  artists: Artist[]
}

interface FoldersProps {
  folders: Folder[]
  onFolderExpand: any
}

const Folders: React.FC<FoldersProps> = ({ folders, onFolderExpand }) => {

  const [openFolders, setOpenFolders] = useState({})

  const onClickFolder = (folderName: string) => {
    (openFolders as any)[folderName] = !(openFolders as any)[folderName];
    setOpenFolders({ ...openFolders })
    onFolderExpand(folderName)
  }

  return (<ul className="folders">
    {folders.map((f: Folder) =>
      <li className="folder" key={f.name}>
        <div className="label" onClick={() => onClickFolder(f.name)}>
          {(openFolders as any)[f.name] && !!f.artists ? <img src="/images/open-folder.png" /> : <img src="/images/closed-folder.png" />}
          <label>{f.name}</label>
        </div>
        {(openFolders as any)[f.name] && !!f.artists ? <ul className="artists">
          {f.artists.map((a: Artist) => <li key={a.name}>{a.name} ({a.portfolioSize} photos)</li>)}
        </ul> : null}
      </li>
    )}
  </ul>)
}


export default Folders
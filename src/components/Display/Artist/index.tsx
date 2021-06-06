import React from 'react';

import './index.scss';

type Thumbnail = {
    thumbnail: string
}

interface ArtistProps {
    name: string
    portfolio: Thumbnail[]
}

const Artist: React.FC<ArtistProps> = ({ name, portfolio }) => (
    <div className="artist">
        <h1>{ name }</h1>
        <div className="thumbnails">
            { portfolio.map( (t: Thumbnail) => <div className="thumbnail"><img src={t.thumbnail} /></div>)}        
        </div>
    </div>
)

export default Artist;
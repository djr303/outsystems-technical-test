import React from 'react';

import './index.scss';

interface ImageDetailsProps {
    url: string,
    width: number,
    height: number,
    xResolution: number,
    yResolution: number
}

const ImageDetails: React.FC<ImageDetailsProps> = ({ url, width, height, xResolution, yResolution }) => (
    <table className="image-details">
        <tr>
            <td className="label">Url</td>
            <td className="detail">{ url }</td>
        </tr>
        <tr>
            <td className="label">Width</td>
            <td className="detail">{ width }</td>
        </tr>
        <tr>
            <td className="label">Height</td>
            <td className="detail">{ height }</td>
        </tr>
        <tr>
            <td className="label">XResolution</td>
            <td className="detail">{ xResolution }</td>
        </tr>
        <tr>
            <td className="label">YResolution</td>
            <td className="detail">{ yResolution }</td>
        </tr>
    </table>
)

export default ImageDetails;
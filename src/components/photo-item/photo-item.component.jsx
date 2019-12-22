import React from 'react';
import './photo-item.styles.css';

const PhotoItem=({imgUrl, description, alt_description, width, height})=>(
    <div className="container">
        <img src={imgUrl} alt="Avatar"
             className="image"
             style={{
                 width:`${width>300?300:width}px`,
                 height: `${height>350?'auto':height}px`
             }}
        />
        {
                description||alt_description ?
                    <div className="overlay">
                    <p className='photo-description'>{description ? description : alt_description}</p>
                    </div>
                    : null
        }

    </div>

);

export default PhotoItem;
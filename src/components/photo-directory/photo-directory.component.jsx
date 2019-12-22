import React from "react";
import './photo-directory.styles.css';
import PhotoItem from "../photo-item/photo-item.component";


const PhotoDirectory=({photos})=>(
    <div className='dir-container'>
        <div className='dir-container-col'>
            {
                    photos.filter((photo, idx)=>idx<7)
                        .map(photo=><PhotoItem
                            key={photo.id}
                            imgUrl={photo.urls.thumb}
                            description={photo.description}
                            alt_description={photo.alt_description}
                            width={photo.width}
                            height={photo.height}
                        />
                        )
            }
        </div>
        <div className='dir-container-col'>
            {
                    photos.filter((photo, idx)=>idx>6&&idx<14)
                        .map(photo=><PhotoItem
                            key={photo.id}
                            imgUrl={photo.urls.thumb}
                            description={photo.description}
                            alt_description={photo.alt_description}
                            width={photo.width}
                            height={photo.height}
                        />
                        )
            }
        </div>
        <div className='dir-container-col'>
            {

                    photos.filter((photo, idx)=>idx>13&&idx<21)
                        .map(photo=><PhotoItem
                            key={photo.id}
                            imgUrl={photo.urls.thumb}
                            description={photo.description}
                            alt_description={photo.alt_description}
                            width={photo.width}
                            height={photo.height}
                        />
                        )
            }
        </div>
        <div className='dir-container-col'>
            {

                    photos.filter((photo, idx)=>idx>20)
                        .map(photo=><PhotoItem
                            key={photo.id}
                            imgUrl={photo.urls.small}
                            description={photo.description}
                            alt_description={photo.alt_description}
                            width={photo.width}
                            height={photo.height}
                        />
                        )
            }
        </div>
    </div>

        );


export default PhotoDirectory;
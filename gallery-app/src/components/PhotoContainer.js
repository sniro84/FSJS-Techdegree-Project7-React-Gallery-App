import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {

    const results = props.data;
    let images;
    if (results.length > 0) {
        images = results.map( (image) =>
            <Photo
                url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                key={image.id}         
            />
        );
    }
    else
        images = <NotFound />
    
    return(
        <ul>
            {images}   
        </ul>
    );
}

export default PhotoContainer;
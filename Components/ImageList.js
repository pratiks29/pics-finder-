import React from 'react';
import ImageCard from './ImageCard.js';
import './imageList.css'

const ImageList = (props)=>{
    const images = props.images.map((image)=>{
        return <ImageCard id={image.id}  image ={image}/>
    });
    return(
        <div className='image-list'>{images}</div>
    );
}

export default ImageList;
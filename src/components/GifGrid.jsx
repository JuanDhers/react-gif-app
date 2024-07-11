//const apikey = 'gez0O1AVIpzDYcOS964F1cG5ugP6irud';
//const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
import {useEffect, useState } from 'react';
import {getGifts} from '../helpres/getgifs'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {


    
    const {images, isLoading} = useFetchGifs(category);
    
    return (
        <>
        <h3>{category}</h3>
        <div className='card-grid'>
       
            {
               images.map((image) =>(
                <GifItem key={image.id}
                {...image}/>
               ))
            }
            </div>
       
        </>
    )
}

import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ categorie }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(categorie).then(gifs => {
            setImages(gifs)
        })
    }, [])


    return (
        <>
            <h3 >{categorie}</h3>
            <div className="card-grid">

                {images.map(gif => {
                    return <GifGridItem
                        key={gif.id}
                        {...gif}

                    />

                })}


            </div>
        </>
    )
}

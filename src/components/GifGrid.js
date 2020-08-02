
import React from 'react'
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ categorie }) => {



    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     getGifs(categorie).then(gifs => {
    //         setImages(gifs)
    //     })
    // }, [category])


    //APLICANDO HOOK

    const { data: images, loading } = useFetchGifs(categorie)

    /////////////
    return (
        <>
            <h3 className="animate__animated animate__bounce">{categorie}</h3>
            {loading && <p>Loading</p>}

            {
                <div className="card-grid animate__animated animate__fadeIn">

                    {images.map(gif => {
                        return <GifGridItem
                            key={gif.id}
                            {...gif}

                        />

                    })}


                </div>
            }
        </>
    )
}
GifGrid.propTypes = {
    categorie: PropTypes.string.isRequired
}


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


export const GifExpertApp = () => {

    const [categorias, setcategorias] = useState(['One Punch'])
    // const handleAdd = () => {
    //     // setcategorias([...categorias, 'Naruto'])
    //     setcategorias(cat =>
    //         [...categorias, 'Bleach']
    //     )
    // };


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setcategorias={setcategorias} />
            <hr />

            {/* <button onClick={handleAdd} > agregar </button> */}
            <ol>
                {
                    categorias.map((categorie) => {
                        return <GifGrid key={categorie} categorie={categorie} />
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
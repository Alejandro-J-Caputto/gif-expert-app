import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"



export const useFetchGifs = (categorie) => {

    const [state, setState] = useState({

        data: [],
        loading: true

    })

    useEffect(() => {
        getGifs(categorie).then(img =>

            setTimeout(() => {

                setState({
                    data: img,
                    loading: false
                });

            }, 3000))
    }, [categorie])



    return state; //data [], loading true.


}
import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Evitando que se ejecute la peticion cada que se renderiza el componente
    useEffect( () => {
        
        getGifts( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                })

            } )


    }, [ category ]);


    return state; //data:[], loading:true

}
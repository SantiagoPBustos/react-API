import React, { useEffect } from 'react';
import { HelperHTTP } from '../helpers/helpHTTP.js'

const APICrud = ()=> {
    let url = "http://localhost:3000/animals";

    let api = HelperHTTP();

    useEffect(()=>{
        api.get(url).then(response => {console.log(response)})
    },[]);

    return ( 
    <>

    </> 
    );
}

export default APICrud;
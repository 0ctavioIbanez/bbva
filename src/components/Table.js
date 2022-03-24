import React, { useState, useEffect } from 'react'

const Table = () => {
    const [aireAPI, setAireAPI] = useState([]);

    const getAire = async () => {
        try {
            const req = await fetch("https://api.datos.gob.mx/v1/calidadAire");
            const response = await req.json();
            setAireAPI(response.results)
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        getAire();
    }, [])
    return (
        <table>
            <tr>
                <thead>
                    <th>Lugar</th>
                    <th></th>
                </thead>
            </tr>
        </table>
    )
}

export default Table
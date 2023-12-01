import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/layout/novedades/NovedadItem';

const NovedadesPage = (props)=> {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState ([]);
    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return(
        <section className ="holder">
            
            <h2>Noticias</h2>
            {loading ? (
                <p>Cargando...</p>
            ): (
                novedades.map(item => <NovedadItem key= {item.id}
                    title= {item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo} />)
            )}
            <h4>Tercera fecha de torneo clasificatorio UROBA</h4>
                    <p>Plantel superior viaja a 9 de Julio para disputar la tercera fecha del clasificatorio UROBA.</p>
                    <p>Sábado 26/08 15:30hs.</p>
        </section>
    );
}

export default NovedadesPage;
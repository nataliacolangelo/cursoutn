import '../styles/components/Home.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
            <img src="images/inicio.jpg" alt="logo" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p> Desde 1970 Yaguá Pitá Rugby Club ha sido un faro de camadería, esfuerzo y deportividad en la comunidad. Todo aquel que se quiera incorporar será bienvenido.</p>
                    <p>¡Te esperamos para seguir haciendo historia juntos!</p>
                </div>
            </div>
        </main>
    )
}

export default HomePage;
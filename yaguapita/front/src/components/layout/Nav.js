import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "Activo" : undefined} >Home</NavLink></li>
                    <li><NavLink to="/nosotros"className={({ isActive }) => isActive ? "Activo" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to="/novedades"className={({ isActive }) => isActive ? "Activo" : undefined}>Novedades</NavLink></li>
                    <li><NavLink to="/contacto"className={({ isActive }) => isActive ? "Activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;
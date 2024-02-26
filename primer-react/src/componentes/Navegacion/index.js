import { Link } from "react-router-dom";
import BotonInicio from "../BotonInicio/Index";

import "./Navegation.css";
export default function Navegation({hoja}){

    return(
        <nav className="navbar navbar-expand-lg mod_nav">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand link_nav color_rickymorty"><a className="navbar-brand link_nav color_rickymorty" >Rick & Morty</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item rounded">
                        <div className={hoja === "Characters"?"nav-link active":"nav-link verde_claro"} aria-current="page" href="#"> <Link to="/characters" className="text-decoration-none"> Characters </Link> </div>
                        </li>
                        <li className="nav-item rounded">
                        <a className={hoja === "Contact"?"nav-link active":"nav-link verde_claro"} href="#"> <Link to="/contact" className="text-decoration-none">Contact</Link></a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}
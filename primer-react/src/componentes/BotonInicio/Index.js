import {Link} from 'react-router-dom';

import './BotonInicio.css'

export default function BotonInicio({nombreBoton,pasaje}){
    return(
        <Link className="btn-inicio text-decoration-none"to={pasaje}>{nombreBoton}</Link>
    )
}
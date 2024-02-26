import "./filtro.css"
import {useState} from "react"

export default function Filter({title,filterName,filterCharacter}){

    let [colorLabel, setColorLabel] = useState("true")

    let cambio_color=()=>{
        if(colorLabel ===false){
            setColorLabel(true)
        }else{
            setColorLabel(false)
        }
    }

    return(
        <div className="form-check form-switch  ps-5 pe-4 py2 rounded filtro_color_div">
            <input className="form-check-input filtro__color__input" type="checkbox" role="switch" onChange={cambio_color} id={filterName} value={filterName} onClick={(event)=>filterCharacter(event.target)} />
            <label className={colorLabel === false ? "blanco form-check-label" : "celeste form-check-label"} htmlFor={filterName}>{title}</label>
        </div>
    )
}

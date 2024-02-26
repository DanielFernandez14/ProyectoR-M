import "./description.css"
export default function Description({status,especie,genero,origen,setHide}) {

    const ocultar=()=>{
        setHide(true)
    }
    return(
        <div>
            <button className="btn description__botonx"  onClick={ocultar}>X</button>

            <div className="d-flex justify-content-center fs-5">
                <ul className="list-group text-light">
                    <li className="fw-bold description__characters">Character Status: {status}</li>

                     <li className="fw-bold description__characters"><span className="fw-normal d-flex column">Species</span><span>{especie}</span></li>

                     <li className="fw-bold description__characters"><span className="fw-normal d-flex column">Origin </span><span>{origen}</span></li>

                    <li className="fw-bold description__characters"><span className="fw-normal d-flex column">Gender </span><span>{genero}</span></li>
                 </ul>  
            </div>      
        </div>

    )
}
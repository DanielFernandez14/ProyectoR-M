import { Fragment } from "react";
import { useState } from "react";
import Filter from "../Filter/Filter";
import "./filters.css";

export default function Filters({filterCharacter}){

        let [seccion_filtros, setSeccionFiltros] = useState(true)
    
        const expander_filtros=()=>{
            if (seccion_filtros===true){
                setSeccionFiltros(seccion_filtros=false)
                console.log(seccion_filtros)
            } else{
                setSeccionFiltros(seccion_filtros=true)
                console.log(seccion_filtros)
            }
    
        }
    
        return(
            <>
            <section className="non_display">
                <h2 className="text-light p-4">Filters</h2>
                <form className="d-flex  flex-sm-column flex-md-column flex-lg-row justify-content-between p-3 mb-5 formulario non-display">
                    
                <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
                <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
                <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
                <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
                <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
                    
        </form>
        </section>
    
    
                <section className="non_display_expandir container-fluid w-75 rounded mt-5 p-2">
                        <div className="">
                            <div className="py-2 px-4 rounded background_color d-flex flex-row justify-content-between align-items-center">
                                <p className="text-light fs-3 pt-2">Filters</p>
                                <button className="btn"><img src="https://rick-and-morty-proyect-umber.vercel.app/images/filter-icon.svg" alt="" onClick={expander_filtros}/></button>
                            </div>
                        </div>
                    <div className={seccion_filtros===true ? "non_display": ""} id={seccion_filtros}>
                            <form className="d-flex  flex-column justify-content-start p-3 mb-5 formulario">
                            
                                <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
                                <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
                                <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
                                <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
                                <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
                            
                     </form>
                </div>
                </section>
           
            </>
        )
    }
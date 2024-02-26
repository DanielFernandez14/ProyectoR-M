import BotonInicio from "../../componentes/BotonInicio/Index";

import"./Home.css";

export default function Home(){
    return(
        <div className="d-flex justify-content-center aling-items-center  vh-100">
        
            <div className="bg-home">
                <h1 className="text-center t_1 pt-5 pb-4 ">Proyect Rick & Morty</h1>
                <h2 className="text-center t_2 pt-2 pb-4">Welcome to Rick & Morty Proyect!</h2>
                <p className="text-center t_3">This proyect was made for practising React and to made a functional website.</p>
                <p className="text-center t_4">In this website you can know information of the characters of this animated series.</p>
                <p className="text-center t_5">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                </p>
                <p className="text-center fs-2 color__lets__go t_6 pb-3">Lets go!</p>
                <div className="div__botones__inicio pb-5">
                <BotonInicio nombreBoton="Characters" pasaje="/characters"/>
                <BotonInicio className="boton_contact"  nombreBoton="Contact" pasaje="/contact"/> 
                </div>       
            </div>
        </div>

    )
}

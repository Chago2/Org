import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
    const placeholderModificador = `${props.placeholder}...`
    
    //Destructuración 

    const {type = "text"} = props

    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <lable>{props.titulo}</lable>
        
        <input 
            placeholder={placeholderModificador} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo
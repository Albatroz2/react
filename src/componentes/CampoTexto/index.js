import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => { // La letra "e" representa el evento//Para vincular el evento "onChange"
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value = {props.valor}
            onChange = {manejarCambio} //Es el evento de los inputs y cada vez que el usuario inserte un valor en el input, se va a mandar este "OnChange"
        />
    </div>
}

export default CampoTexto
import "./ListaOpciones.css"


const ListaOpciones = (props) => {

    /* Metodo map -> arreglo.map ( (equipos, index) =>{
        return <option>{Map lo va a transformar en un nuevo arreglo}</option>
    })  */
    

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div  className="lista-opciones">
        <lable>Equipos</lable>
        <select value={props.valor} onChange={manejarCambio} > 
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map ((equipo,index) => <option key={index}value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones
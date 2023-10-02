import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = props.datos//Esto me ayuda a quitar todos los "props.datos" que habían abajo en backgroundColor y h3
    const { colaboradores } = props
    const obj ={
        backgroundColor: colorSecundario
    }
    console.log(colaboradores.length > 0)//Longitud

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador,index) => <Colaborador 
                            datos={colaborador}
                            key={index} 
                            colorPrimario={colorPrimario}
                        />)
                    }
            
                </div>
            </section>
        }
    </>
}

export default Equipo
import { useState } from 'react';
import { v4 as uuid4 } from 'uuid'
import './App.css';
import Header from './Componentes/Header/header.js';
import Formulario from './Componentes/Formulario/Formulario.js';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';



function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    { 
      id: uuid4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png", 
      nombre: "Harland Lohora", puesto: "Instructor", 
      fav: false
    }, 
    { 
      id: uuid4(),
      equipo: "Programacion", 
      foto: "https://github.com/genesysR-dev.png", 
      nombre: "Genesys Rondon", 
      puesto: "Desarrolladora de software e instructora", 
      fav: false
    }, 
    { 
      id: uuid4(),
      equipo: "UX y Diseño", 
      foto: "https://github.com/JeanmarieAluraLatam.png", 
      nombre: "Jeanmarie Quijada", 
      puesto: "Instructora en Alura Latam", 
      fav: false
    }, 
    { 
      id: uuid4(),
      equipo: "Programacion", 
      foto: "https://github.com/christianpva.png", 
      nombre: "Christian Velasco", 
      puesto: "Head de Alura e Instructor", 
      fav: false
    }, 
    { 
      id: uuid4(),
      equipo: "Innovación y Gestión", 
      foto: "https://github.com/JoseDarioGonzalezCha.png", 
      nombre: "Jose Gonzalez", 
      puesto: "Dev FullStack", 
      fav: false
     },
     {
      id: uuid4(),
      equipo: "Front End",
      foto: "https://github.com/Chago2.png",
      nombre: "Mauricio Valdés Franco",
      puesto: "Dev Front End",
      fav: true
     }
  ])

  const [equipos, actualizarEquipos] = useState ([

    {
      id: uuid4(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid4(),
      titulo: "Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
])

  
  //Ternario --> condición ? se muestra : no Se muestra
  //Corto sircuito condicion && seMuestra

  const cambiarMostrar = () => {
      actualizarMostrar(!mostrarFormulario)
  }

  //Registar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador ", colaborador)
    //SPREAD OPERATOR
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Elimanar Colaborador 
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color de Equipo 
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ",color, id)
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid4}])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresFav = colaboradores.map( (colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    } )
    actualizarColaboradores(colaboradoresFav)
  }

  
  

  
  return (
    <div>
      <Header />
      { /* mostrarFormulario ? <Formulario /> : <></> */}
      { 
        
        mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador ={ registrarColaborador }
        crearEquipo = {crearEquipo}
          />
      }

        <MiOrg cambiarMostrar={cambiarMostrar} /> 
      
      {
        equipos.map ((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = { actualizarColor }
        like = {like}
        /> )
      }

      <Footer />
    </div>
  );
}

export default App;
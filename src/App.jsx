import 'bootstrap/dist/css/bootstrap.min.css'
import './estilos.css'
import { NavBar } from './Components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Docencia } from './Components/Docencia/Docencia'
import { Experiencia } from './Components/Experiencia/Experiencia'
import { Header } from './Components/Header/Header'
import { Formacion } from './Components/Formacion/Formacion'
import { Habilidades } from './Components/Habilidades/Habilidades'
import { Footer } from './Components/Footer/Footer'
import {AboutMe} from './Components/AboutMe/AboutMe'


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='contenedorCV'>
          <div className='contenedorHyF'>
          <Header />
          <Footer />
          </div>
          <div className='contenedorDEFH'>
          <Routes>
            <Route path='/' element={<AboutMe/>}/>
            <Route path='/docencia' element={<Docencia />} />
            <Route path='/experiencia' element={<Experiencia />} />
            <Route path='/formacion' element={<Formacion />} />
            <Route path='/habilidades' element={<Habilidades />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>





    </>
  )
}

export default App

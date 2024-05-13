import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './estilos.css'
import './index.css'
import { useState } from 'react'

import { NavBar } from './Components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Docencia } from './Components/Docencia/Docencia'
import { Experiencia } from './Components/Experiencia/Experiencia'
import { Header } from './Components/Header/Header'
import { Formacion } from './Components/Formacion/Formacion'
import { Habilidades } from './Components/Habilidades/Habilidades'
import { Footer } from './Components/Footer/Footer'
import { AboutMe } from './Components/AboutMe/AboutMe'
import { ToggleLanguage } from './Components/ToggleLanguage/ToggleLanguage'


function App() {

  // Estado para almacenar el idioma seleccionado
  const [language, setLanguage] = useState('es'); // Por defecto español

  // Función para cambiar el idioma
  const toggleLang = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToggleLanguage toggleLang={toggleLang} language={language} />
        <div className='contenedor-general'>
          
          <div className='contenedorCV'>
            <div className='contenedorHeaderyFooter' >
              <Header />
              <Footer language={language} />
            </div>
            <div className='contenedorDEFH'>
              <Routes>
                <Route path='/' element={<AboutMe language={language} />} />
                <Route path='/sobremi' element={<AboutMe language={language} />} />
                <Route path='/docencia' element={<Docencia language={language} />} />
                <Route path='/experiencia' element={<Experiencia language={language} />} />
                <Route path='/formacion' element={<Formacion language={language} />} />
                <Route path='/habilidades' element={<Habilidades language={language} />} />
                <Route path='/*' element={<AboutMe language={language} />} />
              </Routes>
            </div>
          </div>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './variables.css'
import './styles.css'
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
import { ContenedorGeneral } from './Components/ContenedorGeneral/ContenedorGeneral'
import { ContenedorCV } from './Components/ContenedorCV/ContenedorCV'
import { ContenedorHeaderyFooter } from './Components/ContenedorHeaderyFooter/ContenedorHeaderyFooter'
import { ContenedorDEFH } from './Components/ContenedorDEFH/ContenedorDEFH'

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
        <ContenedorGeneral>
          <ContenedorCV>
            <ContenedorHeaderyFooter>
              <Header />
              <Footer language={language} />
            </ContenedorHeaderyFooter>
            <ContenedorDEFH>
              <Routes>
                <Route path='/' element={<AboutMe language={language} />} />
                <Route path='/sobremi' element={<AboutMe language={language} />} />
                <Route path='/docencia' element={<Docencia language={language} />} />
                <Route path='/experiencia' element={<Experiencia language={language} />} />
                <Route path='/formacion' element={<Formacion language={language} />} />
                <Route path='/habilidades' element={<Habilidades language={language} />} />
                <Route path='/*' element={<AboutMe language={language} />} />
              </Routes>
            </ContenedorDEFH>
          </ContenedorCV>
        </ContenedorGeneral>
      </BrowserRouter>
    </>
  )
}

export default App

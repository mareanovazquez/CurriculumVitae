export const AboutMe = () => {

    return (
        <>
            <div className="contenedorSobreMi">
                <div className="encabezadoSobreMi">
                    QUIEN SOY
                </div>

                <div className="contenidoSobreMi">
                    <div className=" biografia">
                        <p className="textoBiografia primerParrafo"> Mi nombre es Mariano Darío Vázquez, oriundo de Santa Teresita, provincia de Buenos Aires. Soy Doctor en Comunicación y Licenciado en Comunicación Social, egresado de la Facultad de Periodismo y Comunicación Social (FPyCS) de la Universidad Nacional de La Plata (UNLP).
                            Poseo experiencia laboral en medios gráficos, radiales y digitales de la ciudad de La Plata.</p>
                        <div className="textoBiografia segundoParrafo"> <p>Actualmente me desempeño en diversos roles:</p>
                            <ul>
                                <li>Docente de grado y posgrado en la FPyCS de la UNLP.</li>
                                <li>Integrante del equipo de mesa de ayuda en el área de informática de la SCBA.</li>
                                <li>Responsable de desarrollo web en <a href="https://estudiorec.com.ar" target="_blank">ESTUDIO REC</a> </li>
                                </ul>
                        </div>
                        <p className="textoBiografia">A lo largo de mi trayectoria académica y profesional, he adquirido sólidos conocimientos y habilidades en comunicación, periodismo, docencia e investigación, además de desarrollo web. Me destaco por mi capacidad de trabajo en equipo, adaptabilidad y compromiso en los proyectos que asumo. </p>
                    </div>
                    <div className="datosPerfil">
                        <p> <span>EDAD:</span> 43 años </p>
                        <p> <span>ESTADO CIVIL:</span> Casado</p>
                        <p> <span>UBICACIÓN:</span>CABA</p>
                        <p><span>DISPONIBILIDAD:</span>Freelance</p>
                    </div>
                </div>
                <div className="dividerCard"> <div className="dividerBar"></div> </div>
            </div>
        </>
    )
}
export const AboutMe = () => {

        return (
        <>
            <div className="contenedorSobreMi">
                <div className="card-header text-center display-6">
                    SOBRE MÍ
                </div>
                <div className="card">
                    <div className="contenidoSobreMi">
                        <div className="card-body biografia">
                            <p className="card-text"> Mi nombre es Mariano Dario Vazquez y soy oriundo de Santa Teresita.
                                Me recibí como periodista en la Facultad de Periodismo y Comunicación Social (FPyCS) de
                                la UNLP. Trabajé en medios gráficos, radiales y digitales de La Plata.
                                En la actualidad me desempeño como docente de grado y posgrado en la FPyCS, en el área de informática de la Suprema Corte Buenos Aires (SCBA) y también soy el responsable de desarrollo web de los proyectos de <a href="https://estudiorec.com.ar" target="_blank">ESTUDIO REC</a>.</p>
                        </div>
                        <div className="datosPerfil">
                            <p> <span>EDAD:</span> 43 años </p>
                            <p> <span>ESTADO CIVIL:</span> Casado</p>
                            <p> <span>UBICACIÓN:</span>CABA</p>
                            <p><span>DISPONIBILIDAD:</span>Freelance</p>
                        </div>
                    </div>
                </div>
                <div className="dividerCard"> <div className="dividerBar"></div> </div>
            </div>
        </>
    )
}
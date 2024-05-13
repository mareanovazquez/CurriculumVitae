export const Experiencia = ({ language }) => {

    return (
        <>
            {language === 'es' ?
                <div className="contenedorExperiencia">
                    <div className="headerExperiencia">
                        EXPERIENCIA
                    </div>
                    <div className="contenidoExperiencia">
                        <ul>
                            <li className="itemExp">DIARIO HOY DE LA PLATA | <small>2011-2012</small></li>
                            <li className="subItemExp">Producción de notas y entrevistas para la sección interés general.

                            </li>
                            <li className="itemExp"> RADIO ESTACIÓN SUR | <small>2011-2016</small> </li>
                            <li className="subItemExp">Columnista sobre tecnología Contenido digital para redes.

                            </li>
                            <li className="itemExp">SYNTAGMA COMUNICACIÓN | <small>2014-2016</small></li>
                            <li className="subItemExp">Community manager. Planificación de campañas para organizaciones políticas y estudiantiles. Consultoría en iniciación digital.

                            </li>
                            <li className="itemExp">LA CUEVA DE CHAUVET | <small>2014-2022</small></li>
                            <li className="subItemExp">Desarrollo del sitio web. Edición y corrección de artículos. Generación de contenido para redes sociales.</li>

                            <li className="itemExp"> SUPREMA CORTE BUENOS AIRES | <small>2012-presente</small></li>
                            <li className="subItemExp">Asistencia, capacitación y generación de contenidos digitales para usuarios del sistema de presentaciones y notificaciones electrónicas. Desde el año 2021 trabajo en un proyecto
                                de desarrollo front-end en React para gestión interna.</li>

                            <li className="itemExp">ESTUDIO REC <small>2020 - presente</small></li>
                            <li className="subItemExp">
                                Consultor externo en gestión de la comunicación digital y desarrollo de los websites de <a href="https://estudiorec.com.ar" target="blank">Estudio REC</a>,
                                el estudio de arquitectura <a href="https:ratzkierarquitectura.com.ar" target="blank">Ratzkier</a> y la agencia de turismo <a href="https://epicaserviciosturisticos.com.ar" target="blank">Épica</a>.</li>
                        </ul>
                    </div>
                    <div className="dividerCard"> <div className="dividerBar"></div> </div>
                </div>
                :
                <div className="contenedorExperiencia">
                    <div className="headerExperiencia">
                        PROFESSIONAL EXPERIENCE
                    </div>
                    <div className="contenidoExperiencia">
                        <ul>
                            <li className="itemExp">DIARIO HOY DE LA PLATA | <small>2011-2012</small></li>
                            <li className="subItemExp">Production of news stories and interviews for the society section.</li>

                            <li className="itemExp"> RADIO ESTACIÓN SUR | <small>2011-2016</small> </li>
                            <li className="subItemExp">Technology and digital content columnist for networks/media.</li>

                            <li className="itemExp">SYNTAGMA COMUNICACIÓN | <small>2014-2016</small></li>
                            <li className="subItemExp">Community manager. Planning campaigns for political and student organizations. Digital onboarding consulting.</li>

                            <li className="itemExp">LA CUEVA DE CHAUVET | <small>2014-2022</small></li>
                            <li className="subItemExp">Website development. Editing and proofreading articles. Generating content for social media.</li>

                            <li className="itemExp"> SUPREMA CORTE BUENOS AIRES | <small>2012-presente</small></li>
                            <li className="subItemExp">Assistance, training, and generation of digital content for users of the electronic filing and notification system. Since 2021, I have been working on a front-end development project in React for internal management.</li>

                            <li className="itemExp">ESTUDIO REC <small>2020 - presente</small></li>
                            <li className="subItemExp">
                            External consultant in digital communication management and website development for <a href="https://estudiorec.com.ar" target="blank">Estudio REC</a>,
                            the architecture firm Ratzkier and tourism agency <a href="https://epicaserviciosturisticos.com.ar" target="blank">Épica</a>.</li>
                        </ul>
                    </div>
                    <div className="dividerCard"> <div className="dividerBar"></div> </div>
                </div>
            }
        </>
    )
}
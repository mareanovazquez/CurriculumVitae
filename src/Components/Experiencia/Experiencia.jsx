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
                            <li className="subItemExp">Producción de notas y entrevistas para la sección interés general.</li>

                            <li className="itemExp"> RADIO ESTACIÓN SUR | <small>2011-2016</small> </li>
                            <li className="subItemExp">Columnista sobre tecnología Contenido digital para redes.</li>

                            <li className="itemExp">SYNTAGMA COMUNICACIÓN | <small>2014-2016</small></li>
                            <li className="subItemExp">Community manager. Planificación de campañas para organizaciones políticas y estudiantiles. Consultoría en iniciación digital.</li>

                            <li className="itemExp">LA CUEVA DE CHAUVET | <small>2014-2022</small></li>
                            <li className="subItemExp">Desarrollo del sitio web. Edición y corrección de artículos. Generación de contenido para redes sociales.</li>

                            <li className="itemExp"> SUPREMA CORTE BUENOS AIRES | <small>2012-presente</small></li>
                            <li className="subItemExp">Asistencia, capacitación y generación de contenidos digitales para usuarios del sistema de presentaciones y notificaciones electrónicas. Desde el año 2021 trabajo en un proyecto
                                de desarrollo front-end en React para gestión interna.</li>

                            <li className="itemExp">ESTUDIO REC <small>2020 - presente</small></li>
                            <li className="subItemExp">
                                Consultor externo en gestión de la comunicación digital y desarrollo de los websites de <a href="https://estudiorec.com.ar" target="_blank">Estudio REC</a>,
                                el estudio de arquitectura <a href="https://ratzkierarquitectura.com.ar" target="_blank">Ratzkier</a>, la agencia de turismo <a href="https://epicaserviciosturisticos.com.ar" target="_blank">Épica</a>, el Centro de entrenamiento <a href="https://danez.com.ar" target="_blank">DANEZ</a> y el jardin maternal <a href="https://jardinhermanosol.com.ar" target="_blank">Hermano Sol</a>.</li>

                            <li className="itemExp">CARTA ONLINE <small>2024</small></li>
                            <li className="subItemExp">
                            Desarrollo de una aplicación web innovadora que simplifica la gestión de cartas y menús para bares, cafeterías y restaurantes. Los clientes podrán acceder fácilmente a carta mediante un código QR. Disponible en <a href="https://cartaonline.com.ar" target="_blank">cartaonline.com.ar</a> </li>
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
                            <li className="subItemExp">Production of news articles and interviews for the general interest section.</li>

                            <li className="itemExp"> RADIO ESTACIÓN SUR | <small>2011-2016</small> </li>
                            <li className="subItemExp">Technology columnist and digital content creator for social media.</li>

                            <li className="itemExp">SYNTAGMA COMUNICACIÓN | <small>2014-2016</small></li>
                            <li className="subItemExp">Community manager. Campaign planning for political and student organizations. Digital transformation consulting.</li>

                            <li className="itemExp">LA CUEVA DE CHAUVET | <small>2014-2022</small></li>
                            <li className="subItemExp">Website development. Article editing and proofreading. Social media content generation.</li>

                            <li className="itemExp"> SUPREMA CORTE BUENOS AIRES | <small>2012-present</small></li>
                            <li className="subItemExp">User assistance, training, and digital content creation for the electronic filing and notification system. Since 2021, working on a React front-end development project for internal management.</li>

                            <li className="itemExp">ESTUDIO REC <small>2020 - present</small></li>
                            <li className="subItemExp">
                                External consultant for digital communication management and website development for <a href="https://estudiorec.com.ar" target="_blank">Estudio REC</a>,
                                the architecture studio <a href="https://ratzkierarquitectura.com.ar" target="_blank">Ratzkier</a>, tourism agency <a href="https://epicaserviciosturisticos.com.ar" target="_blank">Épica</a>, training center <a href="https://danez.com.ar" target="_blank">DANEZ</a> and nursery school <a href="https://jardinhermanosol.com.ar" target="_blank">Hermano Sol</a>.</li>
                                
                            <li className="itemExp">CARTA ONLINE <small>2024</small></li>
                            <li className="subItemExp">
                            Development of an innovative web application that simplifies menu management for bars, cafes, and restaurants. Customers can easily access menus through QR codes. Available at <a href="https://cartaonline.com.ar" target="_blank">cartaonline.com.ar</a></li>
                        </ul>
                    </div>
                    <div className="dividerCard"> <div className="dividerBar"></div> </div>
                </div>
            }
        </>
    )
}
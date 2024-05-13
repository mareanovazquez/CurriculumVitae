export const Docencia = ({ language }) => {

    return (
        <>
            {language === 'es' ?
                <div className="contenedorDocencia">
                    <div className="encabezadoDocencia">
                        DOCENCIA
                    </div>
                    <div className="contenidoDocencia">
                        <div className="docencia">
                            <ul>
                                <li className=" titleDocencia"> <span>
                                    UNIVERSIDAD NACIONAL DE LA PLATA</span></li>
                                <li className="h6"> <span>
                                    FACULTAD DE PERIODISMO Y COMUNICACIÓN SOCIAL</span></li>
                                <li>Taller de narrativas <small>2017-2018</small></li>
                                <li>Taller de tecnologías <small>2012-2017</small></li>
                                <li>Periodismo digital y nuevos medios <small>2018 - presente</small></li>
                                <li>Introducción a los lenguajes de programación <small>2018 - presente</small></li>
                                <li>Seminario de posgrado "Vivir en las redes" <small>2019 - presente</small></li>
                            </ul>
                        </div>
                        <div className="docencia">
                            <ul>
                                <li className="titleDocencia">
                                    <span>INSTITUTO SUPERIOR EN REGISTRACIÓN Y PUBLICIDAD INMOBILIARIA</span></li>
                                <li className="h6"> <span>
                                    TECNICATURA EN REGISTRACIÓN Y PUBLICIDAD INMOBILIARIA</span></li>
                                <li>Comunicación escrita <small>2018-2022</small> </li>
                                <li>Revista registral <small>2018-2022</small></li>
                            </ul>
                        </div>
                        <div className="docencia">
                            <ul>
                                <li className="titleDocencia">
                                    <span>UNIVERSIDAD DEL ESTE</span></li>
                                <li className="h6"> <span>
                                    FACULTAD DE DERECHO Y CIENCIAS SOCIALES</span></li>
                                <li>Principios de redacción <small>2019-2022</small></li>
                            </ul>
                        </div>

                    </div>
                    <div className="dividerCard"> <div className="dividerBar"></div> </div>
                </div>
                :
                <div className="contenedorDocencia">
                    <div className="encabezadoDocencia">
                        TEACHING
                    </div>
                    <div className="contenidoDocencia">
                        <div className="docencia">
                            <ul>
                                <li className=" titleDocencia"> <span>
                                    UNIVERSIDAD NACIONAL DE LA PLATA</span></li>
                                <li className="h6"> <span>
                                    FACULTAD DE PERIODISMO Y COMUNICACIÓN SOCIAL</span></li>
                                <li>Narrative Workshop <small>2017-2018</small></li>
                                <li>Technology Workshop <small>2012-2017</small></li>
                                <li>Digital Journalism and New Media <small>2018 - present</small></li>
                                <li>Introduction to Programming Languages <small>2018 - present</small></li>
                                <li>Postgraduate Seminar "Living on the Web" <small>2019 - present</small></li>
                            </ul>
                        </div>
                        <div className="docencia">
                            <ul>
                                <li className="titleDocencia"><span>HIGHER INSTITUTE OF REAL ESTATE REGISTRATION AND ADVERTISING</span></li>
                                <li className="h6"><span>TECHNICAL DEGREE IN REAL ESTATE REGISTRATION AND ADVERTISING</span></li>
                                <li>Written Communication <small>2018-2022</small></li>
                                <li>Registry Magazine <small>2018-2022</small></li>
                            </ul>
                        </div>
                        <div className="docencia">
                            <ul>
                                <li className="titleDocencia"><span>UNIVERSITY OF THE EAST</span></li>
                                <li className="h6"><span>FACULTY OF LAW AND SOCIAL SCIENCES</span></li>
                                <li>Principles of Writing <small>2019-2022</small></li>
                            </ul>
                        </div>

                    </div>
                    <div className="dividerCard"> <div className="dividerBar"></div> </div>
                </div>

            }

        </>
    )
}
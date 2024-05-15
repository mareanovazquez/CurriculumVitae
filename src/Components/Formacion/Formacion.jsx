export const Formacion = ({ language }) => {

    return (
        <>
            {language === 'es' ?
                <div className="contenedorFormacion">
                    <div className="encabezadoFormacion">
                        ESTUDIOS
                    </div>
                    <div className="contenidoFormacion">
                        <div className="formacion">
                            <ul>
                                <li className="titleFormacion"> <span>
                                    PERIODISMO</span></li>
                                <li>Licenciatura en comunicación social con orientación en periodismo. Facultad de Periodismo y Comunicación Social (UNLP)</li>
                                <li>Doctorado en comunicación social. Facultad de Periodismo y Comunicación Social (UNLP)</li>
                            </ul>
                        </div>
                        <div className="formacion">
                            <ul>
                                <li className="titleFormacion">
                                    <span>PROGRAMACIÓN Y DESARROLLO</span></li>
                                <li>Desarrollo web (CODER HOUSE) </li>
                                <li>Javascript (CODER HOUSE)</li>
                                <li>React (CODER HOUSE)</li>
                                <li>Diseño, contenido e investigación UX-UI (CODER HOUSE)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="dividerCard"> <div className="dividerBar"></div> </div>
                </div>
                :
                <div className="contenedorFormacion">
                    <div className="encabezadoFormacion">
                        EDUCATION
                    </div>
                    <div className="contenidoFormacion">
                        <div className="formacion">
                            <ul>
                                <li className="titleFormacion"><span>JOURNALISM</span></li>
                                <li>Bachelor's degree in Social Communication with an orientation in Journalism. Faculty of Journalism and Social Communication (UNLP)</li>                                <li>Ph.D. in Social Communication. Faculty of Journalism and Social Communication (UNLP)</li>
                            </ul>
                        </div>
                        <div className="formacion">
                            <ul>
                                <li className="titleFormacion"><span>PROGRAMMING AND DEVELOPMENT</span></li>
                                <li>Web Development (CODER HOUSE)</li>
                                <li>JavaScript (CODER HOUSE)</li>
                                <li>React (CODER HOUSE)</li>
                                <li>UX-UI Design, Content, and Research (CODER HOUSE)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="dividerCard"> <div className="dividerBar"></div> </div>
                </div>
            }
        </>
    )
}
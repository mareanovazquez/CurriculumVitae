export const Formacion = () => {

    return (
        <>
            <div className="contenedorFormacion">
                <div className="card-header text-center display-6">
                    ESTUDIOS
                </div>
                <div className="card">
                    <div className="contenidoFormacion">
                        <div className="card-body ">
                            <h5 className="card-title text-center"> <span>
                            PERIODISMO</span></h5>
                            <div className="card-text formacion">
                                <ul>
                                    <li>Licenciatura en social con orientación en periodismo</li>
                                    <li>Doctorado en comunicación social</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dividerCard"> <div className="dividerBar"></div> </div>
                        <div className="card-body ">
                            <h5 className="card-title text-center">
                                <span>PROGRAMACIÓN Y DESARROLLO</span></h5>
                            <div className="card-text formacion">
                                <ul>
                                    <li>Desarrollo web </li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
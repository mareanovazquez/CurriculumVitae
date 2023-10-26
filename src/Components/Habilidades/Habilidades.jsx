import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from '@fortawesome/free-brands-svg-icons'



export const Habilidades = () => {

    return (
        <>
            <div className="contenedorHabilidades">
                <div className="card-header text-center display-6">
                    HABILIDADES
                </div>
                <div className="card">
                    <div className="contenidoSkills">
                        <div className="card-body skills">
                            <div>
                                <ul className="listSkills">
                                    <li className="skillItem">
                                        <FontAwesomeIcon icon={faPencil} />
                                        <div className="skillText">Redacción</div>
                                        <div className="skillLevel">
                                            <div className="levelRedaccion">
                                            </div>
                                        </div>
                                    </li>
                                    <li className="skillItem">
                                        <FontAwesomeIcon icon={faGlasses} />
                                        <div className="skillText">Edición</div>
                                        <div className="skillLevel">
                                            <div className="levelEdicion"></div>
                                        </div>
                                    </li>
                                    <li className="skillItem">
                                        <FontAwesomeIcon icon={faHtml5} />
                                        <div className="skillText">HTML5</div>
                                        <div className="skillLevel">
                                            <div className="levelHtml"></div>
                                        </div>
                                    </li>
                                    <li className="skillItem">
                                        <FontAwesomeIcon icon={faCss3Alt} />
                                        <div className="skillText">CSS3</div>
                                        <div className="skillLevel">
                                            <div className="levelCss"></div>
                                        </div>
                                    </li>
                                    <li className="skillItem">
                                        <FontAwesomeIcon icon={faSquareJs} />
                                        <div className="skillText">Javascript</div>
                                        <div className="skillLevel">
                                            <div className="levelJS"></div>
                                        </div>
                                    </li>
                                    <li className="skillItem">
                                        <FontAwesomeIcon icon={faReact} />
                                        <div className="skillText">ReactJS</div>
                                        <div className="skillLevel">
                                            <div className="levelReact"></div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
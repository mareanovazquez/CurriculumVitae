import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { LoadingBarEdicion } from "../Loading/LoadingBarEdicion";

import { LoadingBarRedaccion } from "../Loading/LoadingBarRedaccion";
import { LoadingBarHtml } from "../Loading/LoadinbBarHtml";
import { LoadingBarCss } from "../Loading/LoadingBarCss";
import { LoadingBarJavascript } from "../Loading/LoadingBarJavascript";
import { LoadingBarReact } from "../Loading/LoadingBarReact";
import { LoadingBarLanguage } from "../Loading/LoadingBarLanguage";
import { LoadingBarFigma } from "../Loading/LoadingBarFigma";


export const Habilidades = ({ language }) => {

    return (
        <>
{language === 'es' ?
            <div className="contenedorHabilidades">
                
                    <div className="encabezadoHabilidades">
                        HABILIDADES
                    </div>
                
                <div className="contenidoSkills">
                    <div className="skills">
                        <div>
                            <ul className="listSkills">
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faPencil} className="figma-icon" />
                                    <div className="skillText">Redacción</div>
                                    <div className="skillLevel">
                                        <LoadingBarRedaccion />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faGlasses} className="figma-icon" />
                                    <div className="skillText">Edición</div>
                                    <div className="skillLevel">
                                        <LoadingBarEdicion />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faLanguage} className="figma-icon" />
                                    <div className="skillText">Inglés</div>
                                    <div className="skillLevel">
                                        <LoadingBarLanguage />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faHtml5} className="figma-icon" />
                                    <div className="skillText">HTML5</div>
                                    <div className="skillLevel">
                                        <LoadingBarHtml />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faCss3Alt} className="figma-icon" />
                                    <div className="skillText">CSS3</div>
                                    <div className="skillLevel">
                                        <LoadingBarCss />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faSquareJs} className="figma-icon" />
                                    <div className="skillText">Javascript</div>
                                    <div className="skillLevel">
                                        <LoadingBarJavascript />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faReact} className="figma-icon" />
                                    <div className="skillText">ReactJS</div>
                                    <div className="skillLevel">
                                        <LoadingBarReact />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faFigma} size="3x" className="figma-icon"/>
                                    <div className="skillText">Figma</div>
                                    <div className="skillLevel">
                                        <LoadingBarFigma />
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="dividerCard"> <div className="dividerBar"></div> </div>
            </div>
            :
            <div className="contenedorHabilidades">
                
                    <div className="encabezadoHabilidades">
                        SKILLS
                    </div>
                
                <div className="contenidoSkills">
                    <div className="skills">
                        <div>
                            <ul className="listSkills">
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faPencil} className="figma-icon" />
                                    <div className="skillText">Writing</div>
                                    <div className="skillLevel">
                                        <LoadingBarRedaccion />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faGlasses} className="figma-icon" />
                                    <div className="skillText">Text editing</div>
                                    <div className="skillLevel">
                                        <LoadingBarEdicion />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faLanguage} className="figma-icon" />
                                    <div className="skillText">English</div>
                                    <div className="skillLevel">
                                        <LoadingBarLanguage />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faHtml5} className="figma-icon" />
                                    <div className="skillText">HTML5</div>
                                    <div className="skillLevel">
                                        <LoadingBarHtml />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faCss3Alt} className="figma-icon" />
                                    <div className="skillText">CSS3</div>
                                    <div className="skillLevel">
                                        <LoadingBarCss />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faSquareJs} className="figma-icon" />
                                    <div className="skillText">Javascript</div>
                                    <div className="skillLevel">
                                        <LoadingBarJavascript />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faReact} className="figma-icon" />
                                    <div className="skillText">ReactJS</div>
                                    <div className="skillLevel">
                                        <LoadingBarReact />
                                    </div>
                                </li>
                                <li className="skillItem">
                                    <FontAwesomeIcon icon={faFigma} size="3x" className="figma-icon"/>
                                    <div className="skillText">Figma</div>
                                    <div className="skillLevel">
                                        <LoadingBarFigma />
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="dividerCard"> <div className="dividerBar"></div> </div>
            </div>
}
        </>
    )
}
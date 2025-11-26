export const AboutMe = ({ language }) => {
  return (
    <>
      {language === "es" ? (
        <div className="contenedorSobreMi">
          <div className="encabezadoSobreMi">QUIEN SOY</div>

          <div className="contenidoSobreMi">
            <div className=" biografia">
              <p className="textoBiografia primerParrafo">
                {" "}
                Mi nombre es Mariano Darío Vazquez y crecí junto al mar, en
                Santa Teresita, provincia de Buenos Aires. Soy Doctor en
                Comunicación y Licenciado en Comunicación Social, egresado de la
                Facultad de Periodismo y Comunicación Social (FPyCS) de la
                Universidad Nacional de La Plata (UNLP). Poseo experiencia
                laboral en medios gráficos, radiales y digitales de la ciudad de
                La Plata.
              </p>
              <div className="textoBiografia segundoParrafo">
                {" "}
                <p>Actualmente me desempeño en diversos roles:</p>
                <ul>
                  <li>Docente de grado y posgrado en la FPyCS de la UNLP.</li>
                  <li>
                    Integrante del equipo de mesa de ayuda en el área de
                    informática de la SCBA.
                  </li>
                  <li>
                    Responsable de desarrollo web en{" "}
                    <a href="https://estudiorec.com.ar" target="_blank">
                      ESTUDIO REC
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <p className="textoBiografia">
                A lo largo de mi trayectoria académica y profesional, adquirí
                conocimientos y desarrollé habilidades en comunicación,
                periodismo, docencia e investigación y <i>web dev</i>. Me siento
                cómodo trabajando en equipo, me adapto fácilmente a nuevos
                entornos y tengo un alto compromiso para con los proyectos que
                asumo.{" "}
              </p>
            </div>
            <div className="datosPerfil">
              <p>
                {" "}
                <span>EDAD:</span> 45 años{" "}
              </p>
              <p>
                {" "}
                <span>ESTADO CIVIL:</span> Casado
              </p>
              <p>
                {" "}
                <span>UBICACIÓN:</span>CABA
              </p>
              <p>
                <span>DISPONIBILIDAD:</span>Freelance
              </p>
            </div>
          </div>
          <div className="dividerCard">
            {" "}
            <div className="dividerBar"></div>{" "}
          </div>
        </div>
      ) : (
        <div className="contenedorSobreMi">
          <div className="encabezadoSobreMi">ABOUT ME</div>

          <div className="contenidoSobreMi">
            <div className=" biografia">
              <p className="textoBiografia primerParrafo">
                {" "}
                I'm Mariano Darío Vazquez and I grew up by the sea, in Santa
                Teresita, province of Buenos Aires. I hold a Ph.D. in
                Communication and a Bachelor's degree in Social Communication,
                having graduated from the Faculty of Journalism and Social
                Communication (FPyCS) at the National University of La Plata
                (UNLP). I have work experience in print, radio, and digital
                media in the city of La Plata.
              </p>
              <div className="textoBiografia segundoParrafo">
                {" "}
                <p>I am currently working in several roles:</p>
                <ul>
                  <li>
                    Undergraduate and graduate teaching at the FPyCS of the
                    UNLP.
                  </li>
                  <li>
                    Member of the help desk team in the IT area of the SCBA.
                  </li>
                  <li>
                    Web Developer at{" "}
                    <a href="https://estudiorec.com.ar" target="_blank">
                      ESTUDIO REC
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <p className="textoBiografia">
                Throughout my academic and professional career, I have acquired
                knowledge and developed skills in communication, journalism,
                teaching and research, and web development. I feel comfortable
                working in teams, I easily adapt to new environments, and I have
                a high level of commitment to the projects I undertake.{" "}
              </p>
            </div>
            <div className="datosPerfil">
              <p>
                {" "}
                <span>AGE:</span> 45{" "}
              </p>
              <p>
                {" "}
                <span>MARITAL STATUS:</span> Married
              </p>
              <p>
                {" "}
                <span>LOCATION:</span>CABA
              </p>
              <p>
                <span>AVAILABILITY:</span>Freelance
              </p>
            </div>
          </div>
          <div className="dividerCard">
            {" "}
            <div className="dividerBar"></div>{" "}
          </div>
        </div>
      )}
    </>
  );
};

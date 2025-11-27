export const Portfolio = ({ language }) => {
  // Array de proyectos - puedes agregar más proyectos aquí
  const proyectos = [
    {
      id: 1,
      titulo: {
        es: "Estudio REC",
        en: "Estudio REC",
      },
      descripcion: {
        es: "Sitio web corporativo para estudio de comunicación. Webapp para mensajes de contacto desarrollada en React.js.",
        en: "Corporate website for communication studio. Webapp for contact messages developed in React.js.",
      },
      tecnologias: ["HTML5", "CSS3", "JavaScript", "React"],
      url: "https://estudiorec.com.ar",
      imagen: "", // Puedes agregar la URL de una imagen
    },
    {
      id: 2,
      titulo: {
        es: "Ratzkier Arquitectura",
        en: "Ratzkier Architecture",
      },
      descripcion: {
        es: "Portfolio web para estudio de arquitectura con galería de proyectos.",
        en: "Web portfolio for architecture studio with project gallery.",
      },
      tecnologias: ["HTML5", "CSS3", "Bootstrap"],
      url: "https://ratzkierarquitectura.com.ar",
      imagen: "",
    },
    {
      id: 3,
      titulo: {
        es: "Épica Servicios Turísticos",
        en: "Épica Tourism Services",
      },
      descripcion: {
        es: "Plataforma web para agencia de turismo con sistema de reservas. Integración con Tienda Nube para gestión de ventas.",
        en: "Web platform for tourism agency with booking system. Integration with Tienda Nube for sales management.",
      },
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      url: "https://epicaserviciosturisticos.com.ar",
      imagen: "",
    },
    {
      id: 4,
      titulo: {
        es: "DANEZ Centro de Entrenamiento",
        en: "DANEZ Training Center",
      },
      descripcion: {
        es: "Sitio web institucional para centro de entrenamiento deportivo. Webapp para mensajes de contacto desarrollada en React.js. ",
        en: "Institutional website for sports training center. Webapp for contact messages developed in React.js.",
      },
      tecnologias: ["HTML5", "CSS3", "JavaScript", "React"],
      url: "https://danez.com.ar",
      imagen: "",
    },
    {
      id: 5,
      titulo: {
        es: "Jardín Hermano Sol",
        en: "Hermano Sol Kindergarten",
      },
      descripcion: {
        es: "Sitio web para jardín maternal con información institucional. Webapp para mensajes de contacto desarrollada en React.js.",
        en: "Website for kindergarten with institutional information. Webapp for contact messages developed in React.js.",
      },
      tecnologias: ["HTML5", "CSS3", "JavaScript", "React"],
      url: "https://jardinhermanosol.com.ar",
      imagen: "",
    },
    {
      id: 6,
      titulo: {
        es: "Carta Online",
        en: "Carta Online",
      },
      descripcion: {
        es: "Aplicación web para gestión de menús digitales con código QR.",
        en: "Web application for digital menu management with QR code.",
      },
      tecnologias: ["HTML", "CSS3", "JavaScript", "React", "Firebase"],
      url: "https://cartaonline.com.ar",
      imagen: "",
    },
  ];

  return (
    <>
      {language === "es" ? (
        <div className="contenedorPortfolio">
          <div className="encabezadoPortfolio">PORTFOLIO</div>

          <div className="contenidoPortfolio">
            <div className="gridProyectos">
              {proyectos.map((proyecto) => (
                <div key={proyecto.id} className="cardProyecto">
                  <div className="cardProyectoHeader">
                    <h3 className="tituloProyecto">{proyecto.titulo.es}</h3>
                  </div>
                  <div className="cardProyectoBody">
                    <p className="descripcionProyecto">
                      {proyecto.descripcion.es}
                    </p>
                    <div className="tecnologias">
                      {proyecto.tecnologias.map((tech, index) => (
                        <span key={index} className="techBadge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="cardProyectoFooter">
                    <a
                      href={proyecto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btnVerProyecto"
                    >
                      Ver proyecto →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="dividerCard">
            <div className="dividerBar"></div>
          </div>
        </div>
      ) : (
        <div className="contenedorPortfolio">
          <div className="encabezadoPortfolio">PORTFOLIO</div>

          <div className="contenidoPortfolio">
            <div className="gridProyectos">
              {proyectos.map((proyecto) => (
                <div key={proyecto.id} className="cardProyecto">
                  <div className="cardProyectoHeader">
                    <h3 className="tituloProyecto">{proyecto.titulo.en}</h3>
                  </div>
                  <div className="cardProyectoBody">
                    <p className="descripcionProyecto">
                      {proyecto.descripcion.en}
                    </p>
                    <div className="tecnologias">
                      {proyecto.tecnologias.map((tech, index) => (
                        <span key={index} className="techBadge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="cardProyectoFooter">
                    <a
                      href={proyecto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btnVerProyecto"
                    >
                      View project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="dividerCard">
            <div className="dividerBar"></div>
          </div>
        </div>
      )}
    </>
  );
};

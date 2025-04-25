const campusArticles = [
    {
        id: 1,
        title: "Jornada de puertas abiertas en Ingeniería",
        summary: "Visitas guiadas y charlas con profesores y estudiantes.",
        content: "<p>Este sábado 3 de mayo...</p>",
        author: "Oficina de Admisiones",
        date: "28 de abril, 2025",
        category: "Eventos"
    },
    {
        id: 2,
        title: "Proyecto de robótica gana concurso nacional",
        summary: "El equipo RoboCanino de Informática obtuvo el primer lugar.",
        content: "<p>Tras meses de trabajo...</p>",
        author: "Facultad de Ingeniería",
        date: "25 de abril, 2025",
        category: "Investigación"
    },
    {
        id: 3,
        title: "Horas de trabajo dan fruto",
        summary: "El equipo de empleabilidad, logra un incremento de 10% de empleos.",
        content: "<p>Desde el 1 de abril...</p>",
        author: "Oficina de Empleabilidad",
        date: "22 de abril, 2025",
        category: "Empleabilidad"
    },
    {
        id: 4,
        title: "Hackaton abierto para la comunidad",
        summary: "Se ha realizado una sesión de actividades con premios y certificados.",
        content: "<p>Este miercoles 23 de abril...</p>",
        author: "Oficina de Admisiones",
        date: "24 de abril, 2025",
        category: "Eventos"
    },
    {
        id: 5,
        title: "¿Qué opinan los estudiantes de su trabajo?",
        summary: "Se ha preguntado a varios estudiantes cómo les gustaría trabajar y qué hacen por ello.",
        content: "<p>Esta tarde 27 de abril...</p>",
        author: "Oficina de Investigación",
        date: "27 de abril, 2025",
        category: "Vida Estudiantil"
    },
    {
        id: 6,
        title: "Torneo de ping pong",
        summary: "Tras una semana de prácticas, Se realizó el torneo de ping pong.",
        content: "<p>Desde el 20 de abril...</p>",
        author: "Camper Felipe",
        date: "28 de mayo, 2025",
        category: "Eventos"
    },
    {
        id: 7,
        title: "¿Será el fin de la programación?",
        summary: "Tras un debate entre estudiantes sobre la IA, se pregunta el destino de la programación.",
        content: "<p>Independientemente de la fecha...</p>",
        author: "Oficina de Investigación",
        date: "1 de mayo, 2025",
        category: "Investigación"
    },
    {
        id: 8,
        title: "Nueva metodología de aprendizaje",
        summary: "Se ha presentado una nueva metodología de aprendizaje por los mismos estudiantes.",
        content: "<p>Desde el año pasado...</p>",
        author: "Camper Felipe",
        date: "29 de abril, 2025",
        category: "Investigación"
    },
];

const data = campusArticles.map(item => `
    <div class="card">
        <h2>${item.title}</h2>
        <p>${item.summary}</p>
        <p>${item.content}</p>
        <p>Publicado por: ${item.author} el ${item.date}</p>
    </div>
`);



class CategoriesFilter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        const div = document.createElement("div");
        const style = document.createElement("style");
        // Para celular, quitar el width y el height
        style.textContent = `
            .card-container {
                position: relative;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
                justify-content: center;
                align-items: center;
                padding: 1rem;
                margin: 1rem;
                border-radius: 0.5rem;
            }
            
            .card {
                display: flex;
                height: 25rem;
                flex-direction: column;
                padding: 1rem;
                background: green;
                border-radius: 0.5rem;
            }

            h2 {
                font-size: 1.5rem;
            }
            p {
                font-size: 1rem;
            }

            @media screen and (min-width: 1250px) {
                .card {
                position: relative;
                width: 50%;
                height: 60rem;
                display: flex;
                margin-left: 25%;
                align-items: center;
                flex-direction: column;
                padding: 1rem;
                background: green;
            }
            }
        `;
        
        div.id = 'card';
        div.innerHTML = `<div class="card-container">${data}</div>`;
        shadow.append(style,div);
    }
}
customElements.define("campus-news-list", CategoriesFilter);

export default CategoriesFilter;
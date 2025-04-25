const campusArticles = [
    {
        id: 1,
        title: "Jornada de puertas abiertas en Ingeniería",
        summary: "Visitas guiadas y charlas con profesores y estudiantes.",
        content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate natus aliquid obcaecati nihil debitis nostrum repellat fuga id neque officia modi explicabo nesciunt voluptatibus, amet facilis minima temporibus earum impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi rem, laborum deserunt blanditiis repellat consectetur saepe. Aliquam qui vel exercitationem deserunt, reprehenderit eaque odio in veritatis dicta non animi!</p>",
        author: "Oficina de Admisiones",
        image: 'https://static.vecteezy.com/system/resources/previews/052/266/771/non_2x/news-logo-with-a-man-reading-a-newspaper-vector.jpg',
        date: "28 de abril, 2025",
        category: "Eventos"
    },
    {
        id: 2,
        title: "Proyecto de robótica gana concurso nacional",
        summary: "El equipo RoboCanino de Informática obtuvo el primer lugar.",
        content: "<p>Tras meses de trabajo...</p>",
        author: "Facultad de Ingeniería",
        image: 'https://img.freepik.com/vector-premium/concepto-noticias-mundiales-ilustracion-globo-vectorial-tema-periodistico-noticias-vivo_570429-18111.jpg?semt=ais_hybrid&w=740',
        date: "25 de abril, 2025",
        category: "Investigación"
    },
    {
        id: 3,
        title: "Horas de trabajo dan fruto",
        summary: "El equipo de empleabilidad, logra un incremento de 10% de empleos.",
        content: "<p>Desde el 1 de abril...</p>",
        author: "Oficina de Empleabilidad",
        image: 'https://cdn-icons-png.flaticon.com/512/11922/11922419.png',
        date: "22 de abril, 2025",
        category: "Empleabilidad"
    },
    {
        id: 4,
        title: "Hackaton abierto para la comunidad",
        summary: "Se ha realizado una sesión de actividades con premios y certificados.",
        content: "<p>Este miercoles 23 de abril...</p>",
        author: "Oficina de Admisiones",
        image: 'https://static.vecteezy.com/system/resources/previews/052/266/771/non_2x/news-logo-with-a-man-reading-a-newspaper-vector.jpg',
        date: "24 de abril, 2025",
        category: "Eventos"
    },
    {
        id: 5,
        title: "¿Qué opinan los estudiantes de su trabajo?",
        summary: "Se ha preguntado a varios estudiantes cómo les gustaría trabajar y qué hacen por ello.",
        content: "<p>Esta tarde 27 de abril...</p>",
        author: "Oficina de Investigación",
        image: 'https://img.freepik.com/vector-premium/logo-noticias-mundiales-vivo-microfono-rojo-azul_888662-67.jpg?semt=ais_hybrid&w=740',
        date: "27 de abril, 2025",
        category: "Vida Estudiantil"
    },
    {
        id: 6,
        title: "Torneo de ping pong",
        summary: "Tras una semana de prácticas, Se realizó el torneo de ping pong.",
        content: "<p>Desde el 20 de abril...</p>",
        author: "Camper Felipe",
        image: 'https://static.vecteezy.com/system/resources/previews/052/266/771/non_2x/news-logo-with-a-man-reading-a-newspaper-vector.jpg',
        date: "28 de mayo, 2025",
        category: "Eventos"
    },
    {
        id: 7,
        title: "¿Será el fin de la programación?",
        summary: "Tras un debate entre estudiantes sobre la IA, se pregunta el destino de la programación.",
        content: "<p>Independientemente de la fecha...</p>",
        author: "Oficina de Investigación",
        image: 'https://img.freepik.com/vector-premium/logo-noticias-mundiales-vivo-microfono-rojo-azul_888662-67.jpg?semt=ais_hybrid&w=740',
        date: "1 de mayo, 2025",
        category: "Vida Estudiantil"
    },
    {
        id: 8,
        title: "Nueva metodología de aprendizaje",
        summary: "Se ha presentado una nueva metodología de aprendizaje por los mismos estudiantes.",
        content: "<p>Desde el año pasado...</p>",
        author: "Camper Felipe",
        image: 'https://img.freepik.com/vector-premium/concepto-noticias-mundiales-ilustracion-globo-vectorial-tema-periodistico-noticias-vivo_570429-18111.jpg?semt=ais_hybrid&w=740',
        date: "29 de abril, 2025",
        category: "Investigación"
    },
];

const data = campusArticles.map(item => `
    <div class="card">
        <h2>${item.title}</h2>
        <img src="${item.image}" alt="${item.author} ${item.id}">
    </div>
`);

const news = campusArticles.map(item => `
    <div class="card">
        <h2>${item.title}</h2>
        <p> <strong>Resumen:</strong> <em>${item.summary}</em></p>
        <p>${item.content}</p>
        <span>Publicado por: ${item.author} el ${item.date}</span>
    </div>
    <style>
        .card {
            height: 40rem;
            position: relative;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
            justify-content: center;
            align-items: center;
            padding: 1rem;
            margin: 1rem;
            background: #666;
            border-radius: 0.5rem;
        }

        h2 {
            background-color: #fff;
            color:rgb(76, 0, 255);
            padding: 1rem;
            border: 1px solid #000;
            border-radius: 0.5rem;
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        p {
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
        }

        strong {
            color: #f1dc16;
            font-size: 1.5rem;
            font-weight: bold;
        }

        em {
            color: #fff;
            font-size: 1.2rem;
        }

        span {
            color: #f1dc16;
            font-size: 1rem;
            font-weight: bold;
        }

        @media screen and (min-width: 1250px) {
        .card {
            position: relative;
            display: flex;
            height: 40rem;
            flex-direction: column;
            padding: 3rem;
            background: #666;
            border-radius: 0.5rem;
            border: 1px solid #000;
            cursor: pointer;
            margin-left: 26rem;
        }

        h2 {
            font-size: 2rem;
            font-weight: bold;
        }

        strong {
            font-size: 1.7rem;
            font-weight: bold;
        }

        em {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        p {
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
        }

        span {
            font-size: 1.3rem;
            font-weight: bold;
        }
        `
);

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
                position: relative;
                display: flex;
                height: 25rem;
                flex-direction: column;
                padding: 1rem;
                background: #fff;
                border-radius: 0.5rem;
                border: 1px solid #000;
                cursor: pointer;
            }

            .card:hover {
                box-shadow: 0 0 10px red;
                h2 {
                    text-shadow: 1px 0px 15px red;
                }
            }

            h2 {
                color:#000;
                font-size: 1.5rem;
                font-weight: bold;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
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
                }

                h2 {
                    font-size: 2rem;
                    font-weight: bold;
                }

                img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                }
            }

            @media screen and (min-width: 400px) {
                .card {
                    align-items: center;
                }

                img {
                width: 100%;
                height: 80%;
                object-fit: contain;
                }
            }

            @media screen and (min-width: 700px) {
                h2 {
                    font-size: 2rem;
                    font-weight: bold;
                }
            }      
        `;
        
        div.id = 'card';
        div.innerHTML = `<div class="card-container">${data}</div>`;
        shadow.append(style,div);

        this.shadowRoot.getElementById('card').addEventListener('click', () => {
            div.innerHTML = news;
        });
    }
}
customElements.define("campus-news-list", CategoriesFilter);

export default CategoriesFilter;
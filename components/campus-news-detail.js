import campusArticles from "./campus-news-app.js";
import CategoriesFilter from "./campus-category-filters.js";

class NewsContent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const container = document.createElement("div");
        container.classList.add("card-container");
        const style = document.createElement("style");

        style.textContent = `
            .card-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
                gap: 1rem;
                padding: 1rem;
            }

            .card {
                display: flex;
                flex-direction: column;
                padding: 1rem;
                background: #fff;
                border-radius: 0.5rem;
                border: 1px solid #000;
                cursor: pointer;
                transition: box-shadow 0.3s ease-in-out;
            }

            .card:hover {
                box-shadow: 0 0 10px red;
            }

            .card:hover h2 {
                text-shadow: 1px 0px 15px red;
            }

            h2 {
                color: #000;
                font-size: 1.5rem;
                font-weight: bold;
            }

            img {
                width: 100%;
                height: auto;
                object-fit: cover;
            }

            .details {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
                height: 100%;
                flex-direction: column;
                padding: 3rem;
                background: #666;
                border-radius: 0.5rem;
                color: #fff;
                position: relative;
            }

            #back-content {
                position: absolute;
                top: 1rem;
                left: 1rem;
                background-color: #000;
                color: #fff;
                font-size: 1rem;
                border: none;
                border-radius: 0.5rem;
                padding: 0.5rem 1rem;
                cursor: pointer;
            }

            #back-content:hover {
                background-color: #fff;
                color: #000;
                border: 1px solid #fff;
                transform: scale(1.2);
                transition: all 0.3s ease-in-out;
            }

            .details h2 {
                background-color: #fff;
                color: #4c00ff;
                align-content: center;
                padding: 1rem;
                border: 1px solid #000;
                border-radius: 0.5rem;
                font-size: 1.2rem;
                font-weight: bold;
            }

            .details p {
                color: #fff;
                font-size: 1.1rem;
                font-weight: bold;
            }

            strong {
                color: #f1dc16;
                font-size: 1.2rem;
                font-weight: bold;
            }

            em {
                color: #fff;
                font-size: 1.1rem;
                font-weight: bold;
            }

            span {
                font-size: 1rem;
                font-weight: bold;
                color: #f1dc16;
                margin-top: 1rem;
            }

            @media screen and (min-width: 1250px) {
                .card {
                    width: 50%;
                    margin: 0 auto;
                    height: 60rem;
                }

                img {
                    height: 80%;
                    object-fit: contain;
                }

                .details {
                    max-width: 70%;
                    margin: 0 auto;
                }
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(container);

        this.container = container;
        this.renderList();
    }

    renderList(category) {
        this.container.innerHTML = "";
        campusArticles.forEach(article => {
            const card = document.createElement("div");
            card.classList.add("card");

            const title = document.createElement("h2");
            title.textContent = article.title;

            const image = document.createElement("img");
            image.src = article.image;
            image.alt = `${article.author} ${article.id}`;

            card.appendChild(title);
            card.appendChild(image);

            card.addEventListener("click", () => this.renderDetails(article));
            this.container.appendChild(card);
        });
    }

    renderDetails(article) {
        this.container.innerHTML = "";

        const detail = document.createElement("div");
        detail.classList.add("details");

        const back = document.createElement("button");
        back.id = "back-content";
        back.textContent = "Volver";
        back.addEventListener("click", () => this.renderList());

        const h2 = document.createElement("h2");
        h2.textContent = article.title;

        const summary = document.createElement("p");
        summary.innerHTML = `<strong>Resumen:</strong> <em>${article.summary}</em>`;

        const content = document.createElement("div");
        content.innerHTML = article.content;

        const footer = document.createElement("span");
        footer.textContent = `Publicado por: ${article.author} el ${article.date}`;

        detail.appendChild(back);
        detail.appendChild(h2);
        detail.appendChild(summary);
        detail.appendChild(content);
        detail.appendChild(footer);

        this.container.appendChild(detail);
    }
}

customElements.define("campus-news-detail", NewsContent);
export default NewsContent;
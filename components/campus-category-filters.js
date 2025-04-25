class CategoriesFilter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        const nav = document.createElement("nav");
        const style = document.createElement("style");
        style.textContent = `
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;
            }
            nav {
                display: flex;
                overflow-x: auto;
            }
            ul {
                display: flex;
                gap: 1rem;
                justify-content: center;
                align-items: center;
                list-style: none;
                margin-left: -2.5rem;
            }
            li {
                display: flex;
                width: 100%;
            }
            button {
                width: 10rem;
                height: 2rem;
                background:rgb(248, 73, 73);
                border: none;
                border-radius: 0.5rem;
                color: #fff5f5fd;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
            }

            #todas{
                background: #000;
                
            }
            button:hover {
                transform: scale(1.1);
                background-color: #000;
            }
            
            @media screen and (min-width: 1250px) {
                nav {
                display: flex;
                justify-content: center;
                overflow-x: auto;
            }
            }
        `

        nav.id = 'all-categories';
        nav.innerHTML = `
            <div class="container">
                <ul>
                    <li><button id="todas">Todas</button></li>
                    <li><button id="eventos">Eventos</button></li>
                    <li><button id="investigacion">Investigación</button></li>
                    <li><button id="empleabilidad">Empleabilidad</button></li>
                    <li><button id="vida-estudiantil">Vida Estudiantil</button></li>
                </ul>
            </div>
        `
        shadow.append(style,nav);
    }
    connectedCallback() {
        this.shadowRoot.getElementById('todas').addEventListener('click', () => {
            alert('Todas las noticias');
            this.dispatchEvent(new CustomEvent('filter:category',{
                detail: {action: 'all'},
                bubbles: true,
                composed: true
            }));
            
        });
        this.shadowRoot.getElementById('eventos').addEventListener('click', () => {
            alert('Eventos');
            this.dispatchEvent(new CustomEvent('filter:category',{
                detail: {action: 'eventos'},
                bubbles: true,
                composed: true
            }));
        });
        this.shadowRoot.getElementById('investigacion').addEventListener('click', () => {
            alert('Investigación');
            this.dispatchEvent(new CustomEvent('filter:category',{
                detail: {action: 'investigacion'},
                bubbles: true,
                composed: true
            }));
        });
        this.shadowRoot.getElementById('empleabilidad').addEventListener('click', () => {
            alert('Empleabilidad');
            this.dispatchEvent(new CustomEvent('filter:category',{
                detail: {action: 'empleabilidad'},
                bubbles: true,
                composed: true
            }));
        });
        this.shadowRoot.getElementById('vida-estudiantil').addEventListener('click', () => {
            alert('Vida Estudiantil');
            this.dispatchEvent(new CustomEvent('filter:category',{
                detail: {action: 'vida-estudiantil'},
                bubbles: true,
                composed: true
            }));
        });
    }
}
customElements.define("campus-category-filters", CategoriesFilter);

export default CategoriesFilter;
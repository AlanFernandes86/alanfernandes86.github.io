const __template = document.createElement('template');
__template.innerHTML = `<section class="portfolio-personal">
<h2>Projetos pessoais</h2>
</section>
<section class="portfolio-courses">
  <h2>Projetos desenvolvidos na Trybe</h2>
</section>`;

class Portfolio extends HTMLElement {
  connectedCallback() {
    this.appendChild(__template.content.cloneNode(true));
  }
}

export const registerPortfolioPage = () => customElements.define('portfolio-page', Portfolio);
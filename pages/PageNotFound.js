const __template = document.createElement('template');
__template.innerHTML = `<section>
<h2 class="title">
  PAGE NOT FOUND
</h2>
</section>`;

class PageNotFound extends HTMLElement {
  connectedCallback() {
    this.appendChild(__template.content.cloneNode(true));
  }
}

export const registerPageNotFound = () => customElements.define('page-not-found', PageNotFound);
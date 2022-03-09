const __template = document.createElement('template');
__template.innerHTML = `<section class="section-title">
<h1 class="title">
  <span>Olá </span>
  <span>Eu sou Alan</span>
  <span>Desenvolvedor Web</span>
</h1>
</section>`;

class Hello extends HTMLElement {
  connectedCallback() {
    this.appendChild(__template.content.cloneNode(true));
  }
}

export const registerHelloPage = () => customElements.define('hello-page', Hello);
const __template = document.createElement('template');
__template.innerHTML = `<section class="contacts">
<h2>Contato</h2>
</section>`;

class Contacts extends HTMLElement {
  connectedCallback() {
    this.appendChild(__template.content.cloneNode(true));
  }
}

export const registerContactsPage = () => customElements.define('contacts-page', Contacts);
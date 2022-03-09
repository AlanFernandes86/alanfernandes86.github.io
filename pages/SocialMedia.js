const __template = document.createElement('template');
__template.innerHTML = `<section class="social-media">
<h2>Redes Sociais</h2>
</section>`;

class SocialMedia extends HTMLElement {
  connectedCallback() {
    this.appendChild(__template.content.cloneNode(true));
  }
}

export const registerSocialMediaPage = () => customElements.define('social-media', SocialMedia);
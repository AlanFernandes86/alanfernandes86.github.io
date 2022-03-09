const __template = document.createElement('template');
__template.innerHTML = `<section class="abilities">
<h2>Minhas principais habilidades</h2>
<ul>
  <li>Resiliência</li>
  <li>Autodireção</li>
  <li>Espirito de equipe</li>
  <li>Senso de urgência</li>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>Javascript</li>
  <li>React</li>
  <li>Redux</li>
</ul>
<h2>Me aprimorando em</h2>
<ul>
  <li>Inglês</li>
  <li>Autogestão</li>
  <li>Criatividade</li>
  <li>Node JS</li>
  <li>Mongo DB</li>
</ul>
</section>`;

class Abilities extends HTMLElement {
  connectedCallback() {
    this.appendChild(__template.content.cloneNode(true));
  }
}

export const registerAbilitiesPage = () => customElements.define('abilities-page', Abilities);
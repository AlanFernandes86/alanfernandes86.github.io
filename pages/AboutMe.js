const __template = document.createElement('template');
__template.innerHTML = `<section class="about-me">
<h2>Um pouco sobre mim </h2>
<p>Apaixonado por escrever código, muito curioso, gosto de saber como as coisas funcionam e o que me mantém
  motivado é estar sempre aprendendo algo novo. </p>
<p>Atualmente moro no Rio de Janeiro.</p>
<p>Sou Pai do Luiz Miguel e Esposo da Luane.</p>
<p>Nas horas vagas gosto de ler sobre tecnologia, escutar musica e amo viajar/passear com a família e
  amigos.</p>
<p>Formado em Sistemas de Informações e atualmente estudante da
  Trybe - Turma XP no curso de Full Stack Web Developer.</p>
</section>`;

class AboutMe extends HTMLElement {
  connectedCallback() {
    this.appendChild(__template.content.cloneNode(true));
  }
}

export const registerAboutMePage = () => customElements.define('about-me', AboutMe);
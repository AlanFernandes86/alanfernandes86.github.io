// import smoothScrollTo from './utils.js';
import * as pages from '../pages/index.js';
import { route, handleLocation } from './router.js';

class App {
  constructor() {
    this.menuIcon = document.querySelector('.menu-icon');
    this.shadow = document.querySelector('.display-shadow');
    this.nav = document.querySelector('.nav');
    this.links = document.querySelector('.nav-links-content');
    this.initListeners();
    this.registerComponents();
    this.initRoot();
  }

  initListeners = () => {
    this.menuIcon.onclick = this.handleMenu;
    this.links.onclick = (event) => {
      route(event);
      this.handleMenu();
    };      
  }

  registerComponents = () => {
    Object.values(pages).forEach((page) => page());
  }

  initRoot = () => {
    handleLocation();
  }

  handleMenu = () => {
    this.nav.classList.toggle('show-nav');
    this.shadow.classList.toggle('display-none');
    this.changeIcon();
  }

  changeIcon = () => {
    if (this.menuIcon.classList.contains('menu-animation-open')) {
      this.menuIcon.textContent = 'menu';   
    } else {
      setTimeout(() => this.menuIcon.textContent = 'close', 500);      
    }
    this.menuIcon.classList.toggle('menu-animation-open');
    this.menuIcon.classList.toggle('menu-animation-close');
  }
}

document.addEventListener('DOMContentLoaded', new App);
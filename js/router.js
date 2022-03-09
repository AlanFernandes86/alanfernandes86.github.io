const root = document.getElementById('root');

export const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  console.log(window.location.hash);
  handleLocation();
};

const routes = {
  404: 'page-not-found',
  '': 'hello-page',
  '#about-me': 'about-me',
  '#abilities': 'abilities-page',
  '#portfolio': 'portfolio-page',
  '#contacts': 'contacts-page',
  '#social-media': 'social-media',
};

export const handleLocation = () => {
  const path = window.location.hash;
  console.log(path);
  const route = routes[path] || routes[404];
  root.innerHTML = '';
  root.appendChild(document.createElement(route));
};


window.onpopstate = handleLocation;

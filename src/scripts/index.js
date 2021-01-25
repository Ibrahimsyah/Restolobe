import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './views/app';
import '../styles/main.scss';
import '../styles/detail.scss';
import '../styles/responsive.scss';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  appDrawer: document.querySelector('#drawer'),
  content: document.querySelector('#root'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

export default {
  init({button, appDrawer, content}) {
    button.addEventListener('click', (event) => {
      this._openDrawer(event, appDrawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, appDrawer);
    });
  },

  _openDrawer: (event, appDrawer) => {
    event.stopPropagation();
    appDrawer.classList.toggle('open');
  },

  _closeDrawer: (event, appDrawer) => {
    event.stopPropagation();
    appDrawer.classList.remove('open');
  },
};

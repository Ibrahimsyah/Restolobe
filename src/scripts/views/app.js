import AppDrawerInitiator from '../utils/app-drawer-initiator';
import UrlParser from '../routes/url-parser';
import Routes from '../routes/routes';

export default class App {
  constructor({button, appDrawer, content}) {
    this._button = button;
    this._appDrawer = appDrawer;
    this._content = content;
    this._initAppShell();
  }

  _initAppShell() {
    AppDrawerInitiator.init({
      button: this._button,
      appDrawer: this._appDrawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseWithCombiner();
    const page = Routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
};

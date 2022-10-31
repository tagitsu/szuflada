import { select, templates, classNames } from '../settings.js';
import { yarnStock } from '../data.js';

class Yarn {
  constructor(nbr, brand, name) {
    const thisYarn = this;
    console.log(this);
    // tworzę właściwości obiektu (instancji) Yarn 
    thisYarn['yarnNo' + nbr] = {
      brand: brand,
      name: name,
    };

    thisYarn.getElements();
    thisYarn.makeNewYarnBox(yarnStock['yarnNo' + nbr]);
  }

  getElements() {
    const thisYarn = this;

    thisYarn.dom = {};

    thisYarn.dom.main = document.querySelector(select.container.main);
    thisYarn.dom.formYarnBtn = thisYarn.dom.main.querySelector(select.button.formYarn);
    thisYarn.dom.addYarnForm = thisYarn.dom.main.querySelector(select.form.addYarnForm);
  }

  makeNewYarnBox(yarn) {
    const thisApp = this;

    const yarnBoxCode = templates.newYarnTemp(yarn);
    // tworzę nowy kwadrat
    // dodaję nowy kwadrat na końcu kolejki
    thisApp.dom.main.insertAdjacentHTML('beforeend', yarnBoxCode);
    // zmieniam klasę formularza
    thisApp.dom.addYarnForm.classList.remove(classNames.visibleElement);
    thisApp.dom.addYarnForm.classList.add(classNames.hiddenElement);

    // zmieniam klasę przycisku addBtn
    thisApp.dom.formYarnBtn.classList.remove(classNames.hiddenElement);

  }

} 


export default Yarn;

import { select, classNames, templates } from './settings.js';
import { yarnStock } from './data.js';
import Yarn from './components/Yarn.js';
  


const elements = {
  drawer: document.querySelector(select.container.yarnDrawer),
  saveBtn: document.querySelector(select.button.saveBtn),
  formInputs: document.querySelectorAll(select.all.formInputs),
};

const app = {
  getElements() {
    const thisApp = this;

    thisApp.dom = {};

    thisApp.dom.formYarnBtn = document.querySelector(select.button.formYarn);
    thisApp.dom.yarnForm = document.querySelector(select.container.yarnForm);
    thisApp.dom.addYarnForm = document.querySelector(select.form.addYarnForm);
    thisApp.dom.saveYarnBtn = document.querySelector(select.button.saveYarn);
    thisApp.dom.yarnFormInputs = thisApp.dom.addYarnForm.querySelectorAll(select.all.formInputs);
  },

  initData() {
    const thisApp = this;

    thisApp.data = {};

    thisApp.data.yarnData = []; // tablica do której trafią info z inputów z formularza

    thisApp.data.yarnNbr = 0;  
  },

  initYarnForm: function() {
    const thisApp = this;
    // obsługa przycisku dodającego włóczkę
    
    thisApp.dom.formYarnBtn.addEventListener('click', () => {
      thisApp.dom.yarnForm.appendChild(thisApp.dom.addYarnForm);
      thisApp.dom.addYarnForm.classList.remove(classNames.hiddenElement);
      thisApp.dom.formYarnBtn.classList.add(classNames.hiddenElement);
    });

    thisApp.dom.saveYarnBtn.addEventListener('click', () => {
      event.preventDefault();
      // pobieram dane z inputów yarn-form
      for (let formInput of thisApp.dom.yarnFormInputs) {
        thisApp.data.yarnData.push(formInput.value);
      }
      // zapisuje je do tablicy
      const yarnBrand = thisApp.data.yarnData[0];
      const yarnName = thisApp.data.yarnData[1];

      if (thisApp.data.yarnNbr < 1) {
        thisApp.data.yarnNbr = 1;
      } else {
        thisApp.data.yarnNbr++;
      }
      // tworzenie nowej instancji Yarn
      thisApp.initYarn(thisApp.data.yarnNbr, yarnBrand, yarnName);
      
      for (let formInput of thisApp.dom.yarnFormInputs) {
        formInput.value = '';
        console.log('co jest w ipucie po wysłaniue', formInput.value);
      }
    });

  },

  initYarn: function(nbr, brand, name) {
    const thisApp = this;

    yarnStock['yarnNo' + nbr] = new Yarn(nbr, brand, name);
    // to jest yarnStock obiekt z pliku data.js
    // w tym obiekcie chciałabym zapisywac dodane boxy z włóczkami
  },

  


  init: function() {
    const thisApp = this;

    thisApp.getElements();
    thisApp.initData();
    thisApp.initYarnForm();

  }
}


// obsługa formularza

let lp = 0;



app.init();


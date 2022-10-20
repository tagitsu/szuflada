{
  'use strict';

  const select = {
    container: {
      yarnDrawer: '.yarn-drawer',
      FormBox: '.square.form',
    },
    templateOf: {
      yarnBox: '#yarn-box', 
    },
    all: {
      formInputs: 'input',
    },
    button: {
      addBtn: '.add-yarn',
      saveBtn: '.save-yarn',
    },
    form: {
      addYarnForm: '.form__add-yarn',
    },
  };

  const classNames = {
    visibleElement: 'active',
    hiddenElement: 'hide',
  };

  const templates = {
    newYarnTemp: Handlebars.compile(document.querySelector(select.templateOf.yarnBox).innerHTML),
  };

  const elements = {
    drawer: document.querySelector(select.container.yarnDrawer),
    addBtn: document.querySelector(select.button.addBtn),
    formBox: document.querySelector(select.container.FormBox),
    addYarnForm: document.querySelector(select.form.addYarnForm),
    saveBtn: document.querySelector(select.button.saveBtn),
    formInputs: document.querySelectorAll(select.all.formInputs),
  };
  
  // dodawnie włóczki
  // obsługa przycisku dodającego włóczkę
  elements.addBtn.addEventListener('click', displayForm);

  function displayForm() {
    elements.formBox.appendChild(elements.addYarnForm);
    elements.addYarnForm.classList.remove(classNames.hiddenElement);
    elements.addBtn.classList.add(classNames.hiddenElement);
  }

  // obsługa formularza
  elements.saveBtn.addEventListener('click', getSkeinsParams);
  let lp = 0;
  const yarnStock = {};
  let yarnArr = [];


  class Yarn {
    constructor(lp, brand, name) {
      // const thisYarn = this;
      this.lp = lp;
      this.brand = brand;
      this.name = name;

    }
    
  } // KONIEC KLASY YARN

  function getSkeinsParams() {
  
    // pobieram dane z inputów
    for (let formInput of elements.formInputs) {
      yarnArr.push(formInput.value);
    }
    // zapisuje je do tablicy
    const brand = yarnArr[0];
    const name = yarnArr[1];

    if (lp < 1) {
      lp = 1;
    } else {
      lp++;
    }
    // tworzę nową instancję (new Yarn)
    addNewYarn(lp, brand, name);
  }

  function addNewYarn(lp, brand, name) {
    yarnStock.newYarn = new Yarn(lp, brand, name);

    makeNewYarnBox(yarnStock.newYarn);
  }

  function makeNewYarnBox(skein) {
    const yarnBoxCode = templates.newYarnTemp(skein);
    // tworzę nowy kwadrat
    // dodaję nowy kwadrat na końcu kolejki
    elements.drawer.insertAdjacentHTML('beforeend', yarnBoxCode);
    // zmieniam klasę formularza
    elements.addYarnForm.classList.remove(classNames.visibleElement);
    elements.addYarnForm.classList.add(classNames.hiddenElement);

    // zmieniam klasę przycisku addBtn
    elements.addBtn.classList.remove(classNames.hiddenElement);
  }
}

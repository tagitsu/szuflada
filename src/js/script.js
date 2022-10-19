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
    buttons: {
      addBtn: '.add-yarn',
      saveBtn: '.save-yarn',
    },
    elements: {
      addYarnForm: '.form__add-yarn',
    }
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
    addBtn: document.querySelector(select.buttons.addBtn),
    formBox: document.querySelector(select.container.FormBox),
    addYarnForm: document.querySelector(select.elements.addYarnForm),
    saveBtn: document.querySelector(select.buttons.saveBtn),
    formInputs: document.querySelectorAll(select.all.formInputs),
  };
  
  console.log(elements.formBox, yarnFormValues); // żeby nie wywalało błędu
  // dodawnie włóczki
  // obsługa przycisku dodającego włóczkę
  elements.addBtn.addEventListener('click', displayForm);

  function displayForm() {
    elements.formBox.appendChild(elements.addYarnForm);
    elements.addYarnForm.classList.remove(classNames.hiddenElement);
    elements.addBtn.classList.remove(classNames.visibleElement);
    elements.addBtn.classList.add(classNames.hiddenElement);
  }

  // obsługa formularza
  elements.saveBtn.addEventListener('click', createNewBox);
  let lp, brand, name;
  const yarn = {};
  let newYarn = {};
  let yarnFormValues = '';
  let yarnArr = [];



  function createNewBox() {
    console.log('przycisk zatwierdzający formularz');
    newYarn = new Yarn(lp, brand, name);
    console.log('to jest nowa włóczka', newYarn);
    yarn.newYarn;
    console.log('to jest zbiór włóczek', yarn);
  }


  class Yarn {
    constructor(lp, brand, name) {
      // const thisYarn = this;
      this.lp = lp;
      this.brand = brand;
      this.name = name;

      this.getSkeinsParams();
      this.createNewYarn();
    }

    getSkeinsParams() {

  
      // pobieram dane z inputów
      for (let formInput of elements.formInputs) {
        yarnArr.push(formInput.value);
      }
      // zapisuje je do tablicy
      const brand = yarnArr[0];
      const name = yarnArr[1];
      console.log(brand, name);
    }

    createNewYarn(brand, name) {
      // tworzę obiekt nowej włóczki 
      console.log(yarn);
      yarn.brand = brand;
      yarn.name = name;
      // numer porządkowy włóczki
      
      if (!(yarn.hasOwnProperty(lp))) {
        yarn.lp = 1;
      } else {
        yarn.lp++;
      }

    }
  }

  
  // dodaje nową włóczkę (instancję) do obiektu z włóczkami?
  const yarnNo1 = new Yarn(1, 'drops', 'wish');
  console.log('yarn no 1', yarnNo1); // obiekt z trzema właściwościami o kluczach no, bran i name
  // tworzę kod HTML nowego kwadrata dla włóczki
  const codeHTML = templates.newYarnTemp(yarnNo1);
  // tworzę nowy kwadrat
  // dodaję nowy kwadrat na końcu kolejki
  elements.drawer.insertAdjacentHTML('beforeend', codeHTML);
  // zmieniam klasę formularza z active na hide
  // zmieniam klasę przycisku addBtn z hide na active
}

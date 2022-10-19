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

  const tplYarn = Handlebars.compile(document.querySelector(select.templateOf.yarnBox).innerHTML);
  
  const drawer = document.querySelector(select.container.yarnDrawer);
  const addBtn = document.querySelector(select.buttons.addBtn);
  const formBox = document.querySelector(select.container.FormBox);
  const addYarnForm = document.querySelector(select.elements.addYarnForm);
  const saveBtn = document.querySelector(select.buttons.saveBtn);
  const formInputs = addYarnForm.querySelectorAll(select.all.formInputs);

  // dodawnie włóczki
  // obsługa przycisku dodającego włóczkę
  addBtn.addEventListener('click', displayForm);

  function displayForm() {
    formBox.appendChild(addYarnForm);
    addYarnForm.classList.remove(classNames.hiddenElement);
    addBtn.classList.remove(classNames.visibleElement);
    addBtn.classList.add(classNames.hiddenElement);
  }

  // obsługa formularza
  saveBtn.addEventListener('click', putYarnInDrawer);

  function putYarnInDrawer() {
    console.log(formInputs);

    console.log('nowa włóczka wskoczyła do szuflady');
    let yarnArr = [];
    // pobieram dane z inputów
    for (let formInput of formInputs) {
      yarnArr.push(formInput.value);
    }
    // zapisuje je do tablicy
    console.log(yarnArr);

    // dodaje nową włóczkę do obiektu z włóczkami?
    // wyciągam dane do tplYarn
    // tworzę nowy kwadrat
    // dodaję nowy kwadrat na końcu kolejki
    // zmieniam klasę formularza z active na hide
    // zmieniam klasę przycisku addBtn z hide na active

  }

  const yarn = {
    brand: 'drops',
    name: 'alpaca',
  };

  let newYarn = tplYarn(yarn);

  const square = drawer.insertAdjacentHTML('beforeend', newYarn);

  
}


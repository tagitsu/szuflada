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
    buttons: {
      addBtn: '.add-yarn',
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
  console.log('formularz dodawania włóczki', addYarnForm);


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
  

  const yarn = {
    brand: 'drops',
    name: 'alpaca',
  };

  let newYarn = tplYarn(yarn);

  const square = drawer.insertAdjacentHTML('beforeend', newYarn);

  
}


{
  'use strict';

  const select = {

    templateOf: {
      yarnForm: '#yarn-form',
      yarnBox: '#yarn-box',
    },

    containerOf: {
      yarnDrawer: '.yarn-drawer',
    },

    all: {
      formInputs: 'input, select',
    },

    button: {
      addYarn: '.add-yarn',
    }

  };

  // const templates = {
  //   yarnForm: Handlebars.compile(document.querySelector(select.templateOf.yarnForm).innerHTML),
  //   yarnBox: Handlebars.compile(document.querySelector(select.templateOf.yarnBox).innerHTML),
  // };


  // chcę zabrać dane z formularza i stworzyć z nich nową włóczkę do szuflady

  // co potrzebuję
  // dane z formularza
  const form = document.querySelector(select.templateOf.yarnForm);
  const formInputs = form.querySelectorAll(select.all.formInputs);
  const addBtn = form.querySelector(select.button.addYarn);
  addBtn.addEventListener('click', getValues);

  let formValues = '';
  let formInputValue = '';

  function getValues() {
    for (let formInput of formInputs) {
      formInputValue = formInput.value;
      console.log(formInputValue);
    }
    return formValues = formValues + formInputValue;
    console.log(formValues);
  }

  
}


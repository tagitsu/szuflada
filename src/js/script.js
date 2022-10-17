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
  // złap dane z formularza
  const form = document.querySelector(select.templateOf.yarnForm);
  console.log('form', form);

};
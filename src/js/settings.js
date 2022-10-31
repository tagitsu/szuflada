export const select = {
  container: {
    header: '.header',
    main: '#drawer',
    yarns: '.yarns',
    yarnForm: '.form--yarn',
  },
  templateOf: {
    yarnBox: '#yarn-box', 
  },
  all: {
    formInputs: 'input',
  },
  button: {
    menuOption: '.menu__btn',
    formYarn: '.btn--form-yarn',
    saveYarn: '.btn--save-yarn',
  },
  form: {
    addYarnForm: '.form__add-yarn',
  },
};

export const classNames = {
  visibleElement: 'active',
  hiddenElement: 'hide',
};

export const templates = {
  newYarnTemp: Handlebars.compile(document.querySelector(select.templateOf.yarnBox).innerHTML),
};

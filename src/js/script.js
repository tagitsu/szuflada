{
  'use strict';

  const tplYarn = Handlebars.compile(document.querySelector('#yarn-box').innerHTML);

  const yarn = {
    brand: 'drops',
    name: 'alpaca',
  };

  let newYarn = tplYarn(yarn);

  const square = document.querySelector('.yarn-drawer').insertAdjacentHTML('beforeend', newYarn);

  
}


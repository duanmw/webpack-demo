import Print from './print';

function getComponent() {
  const element = document.createElement('div');
  return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      // element.innerHTML =  'Hello';
      element.onclick = Print.bind(null, 'Hello webpack!');

      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
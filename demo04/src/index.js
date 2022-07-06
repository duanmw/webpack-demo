import print from "./print";

function getComponent() {
  const element = document.createElement('div');
  return import(/* webpackChunkName: "lodash" */ 'lodash')
    .then(({ default: _ }) => {

      const element = document.createElement('div');
      const btn = document.createElement('button');

      element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

      btn.innerHTML = 'Click me and check the console!';
      btn.onclick = print;

      element.appendChild(btn);

      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
});

const requireContext = require.context("./module", false, /\.js$/);
requireContext.keys().forEach(item => {
  requireContext(item);
});
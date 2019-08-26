import _ from 'lodash';
import './style.scss';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = function () {
    console.log('hello!');
  };

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

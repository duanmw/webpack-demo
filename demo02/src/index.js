import _ from 'lodash';
import './style.css';
import './style.less';
import Icon from './favicon.png';
const imgObj = {}
const requireContext = require.context("./assets", false,/./);
requireContext.keys().forEach(item => {
  imgObj[item] = requireContext(item);
});

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(imgObj);
  class Person{
    age=16;
  }
  console.log(new Person().age)
  
  return element;
}

document.body.appendChild(component());
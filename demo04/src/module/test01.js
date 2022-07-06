import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    
    element.innerHTML = _.join(['test1', 'webpack!'], '<br/>');

    const btn = document.createElement('button');

    btn.innerHTML = 'test 01!';

    btn.onclick = function () {
        console.log("click");
    };

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
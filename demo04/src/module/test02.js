import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    
    element.innerHTML = _.join(['test02', 'webpack!'], '<br/>');

    const btn = document.createElement('button');

    btn.innerHTML = 'test 02!';

    btn.onclick = function () {
        console.log("click", abc);
    };

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
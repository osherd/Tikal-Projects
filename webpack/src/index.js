import _ from 'lodash';
import './style.css'
function component(text) {
    console.log('Rendering component')
    const element = document.createElement('div');

    element.innerHTML = `<h1>${text}</h1>`
    return element;

}
document.body.appendChild(component('yoyoyoyy'));
import { randomChoice, toText, toCode } from "./helpers/helper.js";

let button = document.getElementById('button');
let text = document.getElementById('text');

text.hidden = true;

const buttonAction = (event) => {
    let bytesArr = toCode(randomChoice);
    const message = toText(randomChoice, bytesArr);
    text.innerText = message;
    text.hidden = false

}

button.addEventListener('click', buttonAction);

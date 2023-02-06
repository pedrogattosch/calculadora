const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'limpar') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'igual') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'igual') {
            display.innerText = 'Vazio';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})

const temaAlternador = document.querySelector('.tema-alternador');
const calculadora = document.querySelector('.calculadora');
const iconeAlternador = document.querySelector('.icone-alternador');
let isDark = true;
temaAlternador.onclick = () => {
    calculadora.classList.toggle('dark');
    temaAlternador.classList.toggle('ativo');
    isDark = !isDark;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = parseInt(lines[0]);
let valor2 = parseInt(lines[1]);

function calculo(valor1, valor2) {
    return valor1 * valor2;
}

let produto = calculo(valor1, valor2)

console.log("PROD = " + produto);
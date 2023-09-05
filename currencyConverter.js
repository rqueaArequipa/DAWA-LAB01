const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasaDeCambio = 0.85;

console.log('Bienvenido al Convertidor de Moneda');
console.log('Este programa convierte dólares a euros.');

function realizarConversion() {
  rl.question('Ingrese la cantidad en dólares (o "SALIR" para salir): ', (cantidadEnDolares) => {
    if (cantidadEnDolares.toLowerCase() === 'salir') {
      rl.close();
      return;
    }

    cantidadEnDolares = parseFloat(cantidadEnDolares);

    if (isNaN(cantidadEnDolares)) {
      console.log('Entrada inválida. Por favor, ingrese un número o "SALIR" para salir.');
    } else {
      const cantidadEnEuros = cantidadEnDolares * tasaDeCambio;
      console.log(`${cantidadEnDolares} dólares son equivalentes a ${cantidadEnEuros} euros.`);
    }

    realizarConversion(); 
  });
}
realizarConversion();


//1. Soma de dois numeros simples
let a = 5,
    b = 7,
    soma = a + b;

console.log('A soma de ',a,'com' ,b,'é igual a:',soma);

//2. Verificar se um numero é par ou impár

let numero = 10;
// Verificando se este numero 10 é par
if (numero & 2 === 0){
    console.log(numero,'é par');
}else{
    console.log(numero,'é impar');
}

/**
 *  3. Imprimir numeros de 1 a 10
 *      usando o laço repetitivo 'for'
 */
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// 4.Calcular a média de notas do aluno
let notas = [7.5, 6.2, 8, 9],
    somaNotas = 0;
for (let i = 0; i < notas.length)    
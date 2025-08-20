
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

for (let i = 0; i < notas.length; i++){
    // esta linha
    somaNotas += notas[i];
    // é equivalente a somaNotas = somaNotas + notas[i];
}
let mediaFinal = somaNotas / notas.length;
console.log('A média final do aluno é:', mediaFinal);

// 5. Encontrar o maior numero de um vector (array)
let numeros = [8, 7, 9, 6],
    maior = 0;
let i = 0;

for (let i = 0; i < numeros.length; ++i){
    if (numeros [i] > numeros[i+1]) 
    {
        maior = numeros[i];
    }   
}
console.log('O maior número da lista é;', maior);

// 6. Contar quantas vezes um determinado valor aparece na lista

let valores = [3, 5, 3, 8, 7, 4, 5, 5, 3, 9, 3],
    alvo = 3,
    contador = 0;

for (let i = 0; i < valores.length, i++){
    if (valores[i] === alvo) {
        contador++;
    }
}
console.log('O numero',alvo,'aparece',
                contador, 'vezes na lista.');


// 7. Invertendo os valores de vetor 
let listaOriginal = [1,2,3,4,5,6],
    ListaInvertida = []; //vetor vazio
for (let i = listaOriginal.length -1; i >= 0; 1-- ) {
  // O metodo push do javaScript insere um elemento em uma determinada posição do vetor
  ListaInvertida.push(listaOriginal[i]);  
}

console.log ('Lista original:', listaOriginal);
console.log ('Lista invertida:', ListaInvertida);

/**
 * Agora iremos implementar o famoso algoritmo de ordenação Bubble Sort (algoritmo da bolha)
 */
let lista = [5, 12, 8, 1, 9, 4, 19, 3, 7];

for (i = 0; i < lista.length; i++){
    for (j = 0; j < lista.length; j++){
        if(lista[j] > lista [j+1]){
            let temp = lista[j];
            lista[j] = lista[j+1];
            lista[j+1] = temp;
        }
    }
}
console.log('Lista ordenada:', lista);

// obs: Desafio, ajustar as estruturas de repetição para alterar menos vezes e consequentemente, ficar mais rapido esta ordenação
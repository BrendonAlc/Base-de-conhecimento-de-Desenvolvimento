/* Aprendendo estruturas condicionais
var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador > 0 && jogador 2==0){
        console.log("Jogador 1 marcou ponto!");
        placar = jogador1 > jogador2;
}   else if (jogador > 0 && jogador1 ==0){
        console.log('Jogador 2 marcou ponto');
        placar = jogador2 > jogador1;
}    else {
        console.log("ninguém marcou ponto");
}


//aninhamento de if

var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador1 != -1 ) {
    if (jogador > 0){
        console.log("Jogador 1 marcou ponto!");
    }   else if (jogador > 0){
        console.log('Jogador 2 marcou ponto');
    }    else {
        console.log("ninguém marcou ponto");
    }
}

//if ternário: uma verificação em uma única linha

jogador1 != -1 && jogador != -1 ? console.log('Os jogadores são válidos'):
console.log('Jogadores Invválidos');

//switch case

switch(placar){
    case placar  = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
        default
        console.log('Ninguem ganhou');
}

//laços de repetição: For - For/in - For/of - While - Do/While

for ([expressaoInicial];[condicao];[incremento]){
    declaracao
}

let array = ['valor1','valor2','valor3','valor4','valor5',];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',};
*/

// for executa uma instrução até que ela seja falsa

/*for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
} */

//for/in: funciona como repetição a partir de uma propriedade

// for([indice] in [objeto ou array]){declaracao}

/* for (let i in array){
    console.log(i);
} */

//com object

/* for(i in object){
    console.log(i);
} */

//For/of: Funciona como uma repetição a partir de um valor
// com array
//  for([indice] of [array]){declaracao}


/* for (i of array){
    console.log(i);
}

//com object
for (i of object.propriedade1){
    console.log(i);
} */


// While: executa a instrução enquando determinada condição for verdadeira, a verificação é feita antes da execução
/*
ex: var a= 0;
    while (a < 10) {
        a++;
        console.log(a);
    }
*/
//Do/while: executa instrução "até que" determinada condição seja falsa, a verificação é feita depois da execução

/*
ex: var a = 0;
    do{
        a++;
        console.log(a);
    }while (a <10)
*/
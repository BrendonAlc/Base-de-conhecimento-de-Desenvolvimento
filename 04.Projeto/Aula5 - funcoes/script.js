//Funções e suas particularidades: São blocos de comandos e instruções para a execução de determinadas tarefas
// ex: function nomeDaFuncao(){${instrucao};} nomeDaFuncao();
// function nomedafuncao(){console.log("mensagem a ser visualizada");}  nomedafuncao();

//() - Indica que é um objeto do tipo function
//{} = Indica bloco de instrução a ser executada

function funcao(){
    console.log("Tudo certo jovem!")
}

funcao(); //para mostrar que está funcao acaba aqui

//Funções com parametros: Podem receber em sua declaração, parametros, que servem como variaveis, que pode ser feita durante a chamada da função
//ex: function nomeDaFuncao(parametro){${instrucao};} nomeDaFuncao(valorDoParametro);

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo)
}

mensagem('Tudo certo', 'jovem!');


const pergunta = require('./interface/lerprompt');
const presentation = require('./interface/presentation');
const tratamento = require('./interface/tratamento_entrada');

function executar(){
    
    console.log(presentation);
    console.log('Escolha sua opção: ');
    console.log(`
        >Pedra
        >Papel
        >Tesoura
    `);
    var resposta = pergunta('Opção: _');
    resposta = tratamento(resposta);
}

executar();
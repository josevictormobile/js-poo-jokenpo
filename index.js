const pergunta = require('./interface/lerprompt');
const presentation = require('./interface/presentation');
function executar(){
    
    console.log(presentation);
    console.log('Escolha sua opção: ');
    console.log(`
        >Pedra
        >Papel
        >Tesoura
    `);
    //var resposta = pergunta('Opção: _');
    //console.log(resposta);
}

executar();
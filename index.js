const prompt = require('./interface/lerprompt');

function executar(){
    var resposta = prompt.question('Annie are You okay?');
    console.log(resposta);
}

executar();
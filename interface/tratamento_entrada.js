function tratarEntrada(entrada){
    if(entrada === 'Pe'|| entrada === 'pe'|| entrada === 'Ped'|| entrada === 'ped'|| 
    entrada === 'Pedr'|| entrada === 'pedr'|| entrada === 'pedra' || entrada === 'Pedra'|| 
    entrada === 'peda'|| entrada === 'Peda'|| entrada === 'rock'|| entrada === 'Rock'){
        return 'pedra';
    }
    if(entrada === 'Pa'|| entrada === 'pa'|| entrada === 'Pap'|| entrada === 'pap'|| 
    entrada === 'Pape'|| entrada === 'pape'|| entrada === 'Papel' || entrada === 'papel'|| 
    entrada === 'pepel'|| entrada === 'papal'|| entrada === 'paper'|| entrada === 'Paper'){
        return 'papel';
    }
    if(entrada === 'T'|| entrada === 't'|| entrada === 'Te'|| entrada === 'te'|| 
    entrada === 'Tes'|| entrada === 'tes'|| entrada === 'Teso' || entrada === 'teso'|| 
    entrada === 'Tesou'|| entrada === 'tesou'|| entrada === 'Tesour'|| entrada === 'tesour'
    || entrada === 'Tesoura'|| entrada === 'tesoura'|| entrada === 'tisoura'|| entrada === 'tisora'
    || entrada === 'tizora'|| entrada === 'Tizora'|| entrada === 'Tisoura'|| entrada === 'Tisora'
    || entrada === 'Tisora'|| entrada === 'scissors'|| entrada === 'Scissors'
    ){
        return 'tesoura';
    }
}

module.exports = tratarEntrada;
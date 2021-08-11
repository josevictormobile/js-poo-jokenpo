class Jogador{
    #nome;
    #escolha;
    constructor(){
        
    }

    set escolha(option){
        this.#escolha = option;
    }

    get escolha(){
        return this.#escolha;
    }

    set nome(name){
        this.#nome = name;
    }

    get nome(){
        return this.#nome;
    }
}
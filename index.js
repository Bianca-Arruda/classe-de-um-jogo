class heroi{
	constructor(nome, idade, tipo){
    	this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
      let ataque
      if(this.tipo == "mago"){
         ataque ="magia"
      }else if (this.tipo == "guerreiro"){
          ataque ="espada"
       }else if (this.tipo == "monge"){
           ataque ="marciais"
        } else if (this.tipo == "ninja"){
            ataque ="shuriken"
          }
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
   }
}

let jogador1 = new heroi("Arthur",19,"ninja")
let jogador2 = new heroi("Gabriel",16,"guerreiro")
jogador1.atacar()
jogador2.atacar()
class Heroi {
    constructor(nome, idade, tipo, vida) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
        this.vida = vida || 100;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`${this.tipo} atacou usando ${ataque}`);
    }

    atacarOutroHeroi(outroHeroi) {
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };
        const ataque = ataques[this.tipo] || "ataque desconhecido";
        const dano = Math.floor(Math.random() * 21) + 10;
        outroHeroi.vida -= dano;
        console.log(`${this.tipo} atacou usando ${ataque} causando ${dano} de dano!`);
        console.log(`${outroHeroi.nome} agora tem ${outroHeroi.vida} de vida\n`);
    }
}

// Criando heróis
const heroi1 = new Heroi("Gandalf", 2019, "Mago");
const heroi2 = new Heroi("Conan", 35, "Guerreiro");
const heroi3 = new Heroi("Li", 28, "Monge");
const heroi4 = new Heroi("Hattori", 22, "Ninja");

// Heróis atacando
heroi1.atacar(); // mago atacou usando magia
heroi2.atacar(); // guerreiro atacou usando espada
heroi3.atacar(); // monge atacou usando artes marciais
heroi4.atacar(); // ninja atacou usando shuriken
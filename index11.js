// Pokemon Game
let myPokemon = {
    name: 'Espeon',
    level: 2,
    health: 100,
    attack: 70,
    tackle: function() {
        console.log('The pokemon tackle the target pokemon');
        console.log("targetPokemon");
    }
};


let trainer = {
    name: 'Jianna',
    age: 20,
    pokemonList: [],

    addPokemon: function(pokemon) {
        this.pokemonList.push(pokemon);
        console.log(`${pokemon.name} added to ${this.name}'s team!`);
    }
};


function Pokemon(name, level, health, attack) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = attack;
}


Pokemon.prototype.attackOpponent = function(opponent) {
    console.log(`${this.name} attacks ${opponent.name}!`);
    opponent.health -= this.attack; 
    console.log(`${opponent.name}'s health reduced to ${opponent.health}`);
};


let Espeon = new Pokemon('Espeon', 2, 100, 70);
let Jigglypuffs = new Pokemon('Jigglypuffs', 2, 100, 70);
let Sprigatito = new Pokemon('Sprigatito', 2, 100, 70);


Espeon.attackOpponent(Jigglypuffs);
Jigglypuffs.attackOpponent(Sprigatito);


console.log(`Trainer: ${trainer.name}, Age: ${trainer.age}`);


console.log(`Trainer Name (Dot Notation): ${trainer.name}`);
console.log(`Trainer Age (Bracket Notation): ${trainer['age']}`);


trainer.addPokemon(Espeon);
trainer.addPokemon(Jigglypuffs);
trainer.addPokemon(Sprigatito);

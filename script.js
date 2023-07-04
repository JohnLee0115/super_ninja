class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(`
        Name : ${this.name},
        Health : ${this.health}, 
        Speed : ${this.speed}, 
        Strength : ${this.strength}`)
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Those who forgive themselves, and are able to accept their true nature ... They are the strong ones!")
    }
}

const sensei1 = new Sensei("Itachi")

sensei1.speakWisdom()
sensei1.showStats()

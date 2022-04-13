// Singleton & Factory Pattern
class RedDragon {
    constructor(options) {
        this.damage = options.damage || 4;
        this.agility = options.agility || 4;
        this.color = options.color || "Red"; 
    }
}

class BlueDragon {
    constructor(options) {
        this.damage = options.damage || 6;
        this.agility = options.agility || 2;
        this.color = options.color || "Blue"; 
    }
}

class DragonFactory {

    create = (options, dragonType) => {

        if(!dragonType) {
            return "unable to make vehicle. Please specify a vehicle type and tryagain!"
        }

        let dragon;
        
        if (dragonType === "RedDragon") {
            dragon = new RedDragon(options);
        } else if (dragonType === "BlueDragon") {
            dragon = new BlueDragon(options);
        } 

		
        dragon.dragonType = dragonType;

        dragon.attack = ()=> console.log(`${dragonType} is Attacking`);

        dragon.fly = ()=> console.log(`${dragonType} is Flying`);

        dragon.skill = ()=> console.log(`${dragonType} Is using skill`);

        return dragon;
    }
	
};

const Dragon = (function () {
    let dragons = [];
    let dragonFactory;

    return {
        getDragons: function () {
            return dragons;
        },
        createDragon: function (option, dragonType) {   
            dragonFactory = new DragonFactory();
            const dragon = dragonFactory.create(option, dragonType);
            dragons.push(dragon);
            return dragon;
        }
    };
})();




function initDragon() {
    const RedDragon = Dragon.createDragon({
        damage: 15,
        agility: 5,
        color: "Red",
    }, "RedDragon")
    const BlueDragon = Dragon.createDragon({
        damage: 15,
        agility: 5,
        color: "Blue",
    }, "BlueDragon")
    console.log(Dragon.getDragons()); // Get All Dragon Instance
    RedDragon.attack();
    RedDragon.fly();
    BlueDragon.attack();
    BlueDragon.skill();
}

initDragon();
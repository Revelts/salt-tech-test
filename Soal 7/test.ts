interface CarInterface{ // <------------------------------------------- Interface
    carName: String; //Property name and Types
    exec():void; // Methods and Methods Type
}

class Car implements CarInterface{ //<------------------------------------------- A Class that Implements Interface 
    carName: String;
    constructor(carName: String) {
        this.carName = carName;
    }

    exec(): void {
        console.log(`This is a ${this.carName}`)
    }
}

abstract class Farmer { // <------------------------- Abstract Class
    abstract doFarm(): void; // <-------------------------------------- Abstract Method
 
    farmingStarted(): void { // <----------------- Not Abstract Method
        console.log('Farm Started.');
    }
}
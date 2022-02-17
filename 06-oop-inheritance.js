class Vehicle{
    constructor(make, model, speed, color){
        this.make = make;
        this.model = model;
        this.speed = speed;
        this.color = color;
    }
    print(){
        return "I am a Vehicle my standard speed is 200km/h and I have four tires";
    }

    enginePower(){
        return "My engine is 120 horsepower";
    }
}

class Bus extends Vehicle{
    constructor(make, model, speed, color, power){
        super();
        this.make = make;
        this.model = model;
        this.speed = speed;
        this.color = color;
        this.power = power;
    }

    enginePower(){
        return `I am a Bus my standard speed is ${this.speed}km/h and I have four tires`
    }

    print(){
        return `My engine is ${this.power} horsepower`
    }
}

const bus1 = new Bus("Carpenter", 2020, 115, "Yellow", 430);

console.log(bus1);
console.log(bus1.print());
console.log(bus1.enginePower());
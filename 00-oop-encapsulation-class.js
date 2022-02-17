class Car{
    constructor(){
        var make;
        var model;
        var year;
    }
    getMake(){
        return this.make;
    }
    getModel(){
        return this.model;
    }
    getYear(){
        return this.year;
    }
    setMake(make){
        this.make = make;
    }
    setModel(model){
        this.model = model;
    }
    setYear(year){
        this.year = year;
    }
    displayCarModel(){
        return `${this.make}, ${this.model} and year is ${this.year}`
    }
}

var mustang = new Car();
mustang.setMake("Ford");
mustang.setModel("Mustang");
mustang.setYear(1968);

console.log(mustang.displayCarModel());
console.log(mustang.getMake());

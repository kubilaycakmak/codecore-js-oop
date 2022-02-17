function Vehicle(){
    this.vehicleName = "vehicleName";
    throw new Error("You cannot create an instance of Abstract class")
}

function Bike(vehicleName) {
    this.vehicleName = vehicleName;
}

Bike.prototype = Object.create(Vehicle.prototype);
var bike = new Bike("Honda");
console.log(bike.vehicleName);
        

Bike:{
    Vehicle:{
        vehicleName: "Honda"
    }
}
function Vehicle(){
    this.vehicleName = 'vehicleName';
    throw new Error("You cannot create an instance of Abstract class");
}

Vehicle.prototype.display = function(){
    return "Vehicle is: " + this.vehicleName; 
}

function Bike(vehicleName) {
    this.vehicleName = vehicleName;
}

Bike.prototype = Object.create(Vehicle.prototype);
var bike = new Bike("Honda");
console.log(bike.vehicleName);
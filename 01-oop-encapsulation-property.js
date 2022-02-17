function Car(make, model, year) {
    var _make = make;
    var _model = model;
    var _year = year;

    Object.defineProperty(this,"make", {
        get:function(){
            return _make;
        },
        set:function(_make) {
            this._make = _make;
        }
    });
    Object.defineProperty(this,"model", {
        get:function(){
            return _model;
        },
        set:function(_model) {
            this._model = _model;
        }
    });
    Object.defineProperty(this,"year", {
        get:function(){
            return _year;
        },
        set:function(_year) {
            this._year = _year;
        }
    });
}
var mustang = new Car("Ford", "Mustang", 1970);

console.log(mustang.make + " " + mustang.model + " " + mustang.year);
mustang.make = "Mercedes";

// console.log(mustang.make);
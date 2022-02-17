function Counter(count = 0, step = 1) {
    this.count = count;
    this.step = step;
}

Counter.prototype.set = function(count){
    this.count = count;
    return this;
}

Counter.prototype.inc = function(){
    this.count += this.step;
    return this;
}

Counter.prototype.dec = function(){
    this.count -= this.step;
    return this;
}

Counter.prototype.now = function(){
    return this.count;
}

const counter = new Counter(5, 2);

console.log(counter.now());
counter.inc();
counter.inc();
counter.inc();
console.log(counter.now());
counter.dec();
console.log(counter.now());

console.log(
    Object.getPrototypeOf(new Counter(5, 2)));
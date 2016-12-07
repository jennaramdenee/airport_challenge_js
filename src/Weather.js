function Weather() {}

Weather.prototype.isStormy = function(){
  return this.randomize() < 0.3;
}

Weather.prototype.randomize = function(){
  return Math.random();
}

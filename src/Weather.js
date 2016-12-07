function Weather() {}

Weather.prototype.isStormy = function(){
  this.randomize() < 0.3;
}

Weather.prototype.randomize = function(){
  return Math.random();
}

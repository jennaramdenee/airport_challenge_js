function Airport(capacity=20) {
  this.planes = []
  this.capacity = capacity;
}

Airport.prototype.landPlane = function(plane){
  if(this.isFull()) {
    throw "something really nasty";
  }
  else {
    this.planes.push(plane);
    plane.land();
  }
}

Airport.prototype.takeOffPlane = function(plane){
  this.planes.pop(plane);
  plane.takeOff();
}

Airport.prototype.isFull = function(){
  if (this.planes.length === this.capacity) {
    return true;
  } else {
    return false;
  };
}

Airport.prototype.hasPlaneLanded = function(plane){
  return !plane.flying;
}

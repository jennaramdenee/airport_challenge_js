var Airport = function(){this.planes = []};

Airport.prototype.receieveLandedPlane = function(plane){
  this.planes.push(plane);
};

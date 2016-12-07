describe("Plane creation", function(){

  var airport;
  var plane;
  
  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("can create an instance of plane", function(){
    expect(plane).toBeDefined();
  });

});


describe("Plane status", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("returns whether plane is flying", function(){
    expect(plane.flying).toEqual(true);
  });

  it("changes the plane's status to landed", function(){
    plane.land();
    expect(plane.flying).toEqual(false);
  });

  it("changes the plane's status to flying", function(){
    plane.takeOff();
    expect(plane.flying).toEqual(true);
  })

});

describe("Landing a plane", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();

    planeSpy = new Plane();
    spyOn(planeSpy, "land");
  });

  it("calls the land method on plane when landing a plane", function(){
    airport.landPlane(planeSpy);
    expect(planeSpy.land).toHaveBeenCalled();
  });

});

describe("Taking off a plane", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();

    planeSpy = new Plane();
    spyOn(planeSpy, "takeOff");
  });

  it("calls the land method on plane when landing a plane", function(){
    airport.takeOffPlane(planeSpy);
    expect(planeSpy.takeOff).toHaveBeenCalled();
  });

});

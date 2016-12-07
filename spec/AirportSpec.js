describe("Airport creation", function(){

  beforeEach(function(){
    airport = new Airport();
    airport2 = new Airport(15);
    plane = new Plane();
    plane2 = new Plane();
  });

  describe("Airport Creation", function() {

    it("can create an instance of an airport", function(){
    expect(airport).toBeDefined();
    });

    it("has an empty array to begin with", function(){
      expect(airport.planes).toEqual([]);
    });

    it("has a default capacity of 20", function(){
      expect(airport.capacity).toEqual(20);
    });

    it("can accept a custom capacity", function(){
      expect(airport2.capacity).toEqual(15);
    });

  });


  describe("Landing", function(){

    it("can instruct a plane to land", function(){
      airport.landPlane(plane);
      expect(airport.planes).toEqual(jasmine.arrayContaining([plane]));
    });

    it("can't land a plane if there is no capacity", function(){
      airport.landPlane(plane);
      expect(airport.landPlane(plane2)).toEqual("something really nasty");
    });

    it("can tell if a plane has landed", function(){
      airport.landPlane(plane);
      expect(airport.hasPlaneLanded(plane)).toEqual(true);
    });

  });

  describe("Taking off", function(){

    it("can instruct a plane to take off", function(){
      airport.landPlane(plane);
      airport.takeOffPlane(plane);
      expect(airport.planes).not.toEqual( jasmine.arrayContaining([plane]) );
    });

    it("can tell if a plane has taken off", function(){
      airport.takeOffPlane(plane);
      expect(airport.hasPlaneLanded(plane)).toEqual(false);
    });

  });

  describe("Checking capacity", function(){

    it("can detect when an airport is full", function(){
      airportFull = new Airport(1);
      airportFull.landPlane(plane);
      expect(airportFull.isFull()).toEqual(true);
    });

  });

});

describe('Airport', function(){

  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  describe('confirms a landed plane is', function() {
    it('in the airport', function() {
      airport.receieveLandedPlane();
      expect(airport.planes.length).toEqual(1);
    });
  });

  describe('confirms a flying plane is', function() {
    it('NOT in the airport', function() {
      expect(airport.planes.length).toEqual(0);
    });
  });


});

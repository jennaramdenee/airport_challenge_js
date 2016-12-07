describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });


  describe('knows when a plane has', function() {
    it('taken off', function() {
      expect(plane.takenOff()).toEqual(true);
    });
  });


});

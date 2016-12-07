describe("Weather", function(){

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });


  it("can check for stormy weather", function() {
    spyOn(weather, "randomize").and.returnValue(0.2);
    expect(weather.isStormy()).toEqual(true);
  });

  it("can check for non-stormy weather", function() {
    spyOn(weather, "randomize").and.returnValue(0.8);
    expect(weather.isStormy()).toEqual(false);
  });

  it("randomizer returns a number between 0 and 1", function(){
    expect(weather.randomize()).toBeGreaterThan(0);
    expect(weather.randomize()).not.toBeGreaterThan(1);
  });


});

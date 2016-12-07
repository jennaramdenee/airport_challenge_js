describe("Weather", function(){

  beforeEach(function(){
    weather = new Weather();
  });


  it("can check the weather", function() {
    expect(weather.isStormy()).toEqual(true);
  });

  it("returns a number between 0 and 1", function(){
    expect(weather.randomize()).toBeGreaterThan(0);
    expect(weather.randomize()).not.toBeGreaterThan(1);
  });


});

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function() {
  thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
      expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('has a button to increase temperature',function() {
    thermostat.increaseTemperature();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('has a button to decrease temperature', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('has a minimun temperature of 10 degrees', function() {
    for (var i = 0; i < 10; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.currentTemperature()).toEqual(thermostat.MINIMUN_TEMPERATURE);
  });

  it('has a power saving method by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', function() {
    thermostat.switchPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch power saving mode back on', function() {
    thermostat.switchPowerSavingMode();
    thermostat.switchPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.currentTemperature()).toEqual(thermostat.PSM_ON_MAX_TEMP);
    });
  });
  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingMode();
      for (var i = 0; i < 13; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.currentTemperature()).toEqual(thermostat.PSM_OFF_MAX_TEMP);
    });
  });

  describe('Screen Colour', function() {
    it('is green when less than 18', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.colour()).toEqual('green');
    });

    it('is yellow between 18 and 24', function() {
      expect(thermostat.colour()).toEqual('yellow');
    });

    it('is red when 25 or more', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.increaseTemperature();
        expect(thermostat.colour()).toEqual('red');
      }
    });
  });
});

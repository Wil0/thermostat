'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function() {
  thermostat = new Thermostat()
  });

  it('should start at 20 degrees', function() {
      expect(thermostat.currentTemperature()).toEqual(20);
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
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('has a power saving method by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch power saving mode back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.currentTemperature()).toEqual(25);
    });

    describe('when power saving mode is off', function() {
      it('has a maximum temperature of 32 degrees', function() {
        for (var i = 0; i < 13; i++) {
          thermostat.increaseTemperature();
        }
        expect(thermostat.currentTemperature()).toEqual(32);
      });
    });
  });
});

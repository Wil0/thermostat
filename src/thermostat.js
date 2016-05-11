'use strict'

function Thermostat () {
  this.temperature = 20;
  this.MINIMUN_TEMPERATURE = 10 ;
  this.MAX_LIMIT_TEMP_PSM_ON = 25;
  this.MAX_LIMIT_TEMP_PSM_OFF = 32;
  this.powerSavingMode = true;
}

Thermostat.prototype.currentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  if (this.isMaximumTemperature()) {
    return;// this.MAX_LIMIT_TEMP_PSM_ON;
  }
  // else {
    this.temperature += 1;
  // }
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.isMinimumTemperature()) {
    return this.MINIMUN_TEMPERATURE;
  }
  else {
    return this.temperature -= 1;
  }

};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature < this.MINIMUN_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
 this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_TEMP_PSM_ON;
};

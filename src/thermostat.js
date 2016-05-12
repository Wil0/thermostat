

function Thermostat () {
  this._temperature = 20;
  this._powerSavingMode = true;
  this.MINIMUN_TEMPERATURE = 10 ;
  this.PSM_ON_MAX_TEMP = 25;
  this.PSM_OFF_MAX_TEMP = 32;
  this.DEFAULT_TEMPERATURE = 20;
}

Thermostat.prototype.currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  if(!this.isMaximumTemperature()) {
    this._temperature ++;
  }
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.isMinimumTemperature()) {
    return this.MINIMUN_TEMPERATURE;
  }
  else {
    return this._temperature --;
  }

};

Thermostat.prototype.isMinimumTemperature = function () {
  return this._temperature < this.MINIMUN_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this._powerSavingMode;
};

Thermostat.prototype.switchPowerSavingMode = function () {
  this._powerSavingMode = !this._powerSavingMode;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this._temperature === this.PSM_OFF_MAX_TEMP;
  }
  return this._temperature === this.PSM_ON_MAX_TEMP;
};

Thermostat.prototype.colour = function() {
  if (this._temperature < 18) {
    return 'green';
  } else if (this._temperature > 24) {
    return 'red';
  } else {
    return 'yellow';
  }
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = this.DEFAULT_TEMPERATURE;
};

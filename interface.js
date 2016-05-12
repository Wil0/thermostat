$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemperature());

  $('#increase').on('click', function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.currentTemperature());
  });

  $('#decrease').on('click', function() {
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.currentTemperature());
  });

  $('#reset').on('click', function(){
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.currentTemperature());
  });

  $('#PSM').on('click', function() {
    thermostat.switchPowerSavingMode();
    $('#psm_status').text(thermostat.isPowerSavingModeOn());
  });
});

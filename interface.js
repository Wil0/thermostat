$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#psm_status').text(thermostat.psmStatus());

  $('#increase').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#decrease').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#PSM').on('click', function() {
    thermostat.switchPowerSavingMode();
    $('#psm_status').text(thermostat.psmStatus());
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
  }
});

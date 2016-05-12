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
     $('#screen').css('background', thermostat.colour());
  }
  $('#city').change(function() {
    var city = $('#city').val();

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#temp_outside').text(data.main.temp);
  });
  });
});

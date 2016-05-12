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

    function displayWeather(city) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var key =  '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';
      var units = '&units=metric';
      $.get(url + key + units, function(data) {
        $('#temp_outside').text(Math.round(data.main.temp));
      });
    }

    displayWeather(city);

      $('#city').submit(function(event) {
        event.preventDefault();
        var city = $('#city').val();
        displayWeather(city);
      });
  });
});

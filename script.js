
var api= "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon, temp, tempInCelsius;

$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
    var lat = "lat="+  position.coords.latitude;
    var lon = "lon="+  position.coords.longitude;
    getWeather(lat, lon);
                                                 
                                                 
    }); 
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
})
           
  function getWeather(lat, lon) {
    var urlstring = api + lat + '&' + lon;
    $.ajax ({
      url: urlstring,
      success: function(results) {
        console.log($("img"));
        
        // set the weather image to the icon returned by the api
        $("img")[0].attributes.src.nodeValue = results.weather["0"].icon;
        $("#city").text(results.name + " ,")
        $("#country").text(results.sys);
        $("#tempButton").text(results.main.temp);
         console.log(results);
      }
      

      
      
    })
  }
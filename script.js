window.onload = function () {
  var api = 'https://fcc-weather-api.glitch.me/api/current?lat=';
  var latitude;
  var longitude;
  var address = api + latitude + "&lon" + longitude;

  var x = document.getElementById("weather");
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  this function shows the longitude and latitude of your curent location
  function showPosition(position) {
     latitude = position.coords.latitude;
     longitude = position.coords.longitude; 
  }

  getLocation();

  .fetch(address)
  .then(function(response) {
    response.json()
  })
}








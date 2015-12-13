
$(document).ready(function() {
    'use strict';

    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'nicknordale.nnj8a31p',
        accessToken: 'pk.eyJ1Ijoibmlja25vcmRhbGUiLCJhIjoiY2lmdTN2b2JnMWs3aHVna3I4bGxqMDNzNSJ9.yNkphJiLTNJMsaoOqJYrJQ'
    }).addTo(map);

    var circle = L.circle([51.508, -0.11], 200, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);

    //Montego Bay, Jamaica
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=18.47&lon=-77.92&APPID=6584681eea3d012963220225316e90ec").then(function(data) {
        var weather = data.main.temp;
        var image = data.weather[0].icon;
        var imageURL = "<img src='http://openweathermap.org/img/w/" + image + ".png'>";
        weather = weather * (9/5) - 459.67;
        weather = Math.round(weather);
        $('#weather-results').text(weather);
        $('#weather-image').html(imageURL);
    });
});

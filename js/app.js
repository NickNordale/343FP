var resorts = {
    "locations": [
        {
            "name": "Antigua",
            "lat": "17.08",
            "lon": "-61.82"
        },
        {
            "name": "Bahamas",
            "lat": "23.69",
            "lon": "-75.82"
        },
        {
            "name": "Barbados",
            "lat": "13.17",
            "lon": "-59.55"
        },
        {
            "name": "Jamaica",
            "lat": "18.49",
            "lon": "-77.92"
        },
        {
            "name": "Turks & Caicos",
            "lat": "21.79",
            "lon": "-71.81"
        },
        {
            "name": "Cancun",
            "lat": "21.17",
            "lon": "-86.83"
        },
        {
            "name": "Dominican Republic",
            "lat": "18.61",
            "lon": "-68.35"
        },
        {
            "name": "Tortola",
            "lat": "18.43",
            "lon": "-64.63"
        },
        {
            "name": "Costa Rica",
            "lat": "8.63",
            "lon": "-83.52"
        },
        {
            "name": "Panama",
            "lat": "9.31",
            "lon": "-79.18"
        },
        {
            "name": "Colombia",
            "lat": "10.4",
            "lon": "-75.5"
        },
        {
            "name": "St. Lucia",
            "lat": "13.9",
            "lon": "-60.97"
        }
    ]
};

$(document).ready(function() {
    'use strict';

    //[14.76, -73.84]
    var map = L.map('map').setView([16.83, -72.95], 5);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'nicknordale.nnj8a31p',
        accessToken: 'pk.eyJ1Ijoibmlja25vcmRhbGUiLCJhIjoiY2lmdTN2b2JnMWs3aHVna3I4bGxqMDNzNSJ9.yNkphJiLTNJMsaoOqJYrJQ'
    }).addTo(map);

    var mark = L.icon.mapkey({icon:"beach",color:'#725139',background:'#f2c357',size:30});

    $.each(resorts.locations, function(index, value) {
        console.log(value.name);
        L.marker([value.lat, value.lon],{icon:mark}).bindPopup("<h3 class=test>" + value.name + "</h3>").addTo(map);
        /*L.marker([value.lat, value.lon], {
            color: '#FFF',
            fillColor: '#006080',
            fillOpacity: '0.65'
        }).bindPopup("<h3 class=test>" + value.name + "</h3>").addTo(map);*/
    });


    /*L.circleMarker([51.505, -0.09], {
        color: '#FFF',
        fillColor: '#006080',
        fillOpacity: '0.65'
    }).bindPopup("<h1 class=test>Testing</h1>").addTo(map);*/

    /*L.marker([51.505, -0.09], {

    }).addTo(map);*/

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

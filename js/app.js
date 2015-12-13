
$(document).ready(function() {
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

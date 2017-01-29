// darksky.js //
// Uses ajax and jsonp to retreive current weather and forecasts
// Powered by Dark Sky
//------------------------------------------------------------------//
// VARIABLES
$.ajax({
   url: './darksky.json',
   async: false,
   dataType: 'json',
   success: function (data) {
       mydata = data;
       myapi = data.api;
   }
});
var api = myapi;
var urlBase = 'https://api.darksky.net/forecast/';
// Nakusp Hotsprings
var latitude = '50.2963';
var longitude = '-117.6857';
var loc = latitude +','+ longitude;
var units = 'auto';
var url = urlBase + api + '/' + loc + '?units=' + units;
var dsForecastUrl = "https://darksky.net/forecast/"+loc+"/ca12/en";

// Create the function the JSON data will be passed to.
function weatherData(json) {
  // test container
  target = document.getElementById('weather');
  // current date (timestamp)
  //unixDate = unx;

  // Convert timestamp into an array
  function dateTime(aDate, request){
    // Date from converted timestamp
    rawDate = aDate;
    // Convert to string...
    strDate = rawDate.toString();
    // String to array
    arrDate = strDate.split(' ');
    // Return requested data from array
    if(request == "date"){
      return arrDate[1] +" "+ arrDate[2] +", "+ arrDate[3];
    } else if (request == "time") {
      return arrDate[4];
    } else {
      return "Today...";
    }
  }

  // Currently
  ds_current_timestamp  = json.currently.time;
  ds_current_full_date = Date(ds_current_timestamp);
  ds_current_date = dateTime(ds_current_full_date, 'date');
  updated = dateTime(ds_current_full_date, 'time');
  currently  = json.currently.summary;
  currently_icon  = json.currently.icon;
  alert(currently_icon);
  currently_temp  = Math.round(json.currently.temperature);
  apparent_temp  = Math.round(json.currently.apparentTemperature);
  // ds_current_humidity  = json.currently.humidity;
  // ds_current_windSpeed  = json.currently.windSpeed;
  // ds_current_windBearing  = json.currently.windBearing;
  // ds_current_visibility  = json.currently.visibility;
  // ds_current_cloudCover  = json.currently.cloudCover;
  // ds_current_pressure  = json.currently.pressure;
  // ds_current_ozone  = json.currently.ozone;

  // Forecast summaries
  st_forecast_summary  = json.hourly.summary;
  lt_forecast_summary  = json.daily.summary;

  // Create Weather Widget
  target.innerHTML =
    "<h4>Nakusp, B.C.</h4>"+
    "<span>"+currently+",</span>"+ "</br>"+
    "<span>Temperature is: "+currently_temp+"</span>" +"</br>"+
    "<span>Feels Like: "+apparent_temp+"</span>" + "</br>" +
    "<span>Short Term: "+st_forecast_summary+"</span>" +"</br>"+
    "<span>Long Term: "+lt_forecast_summary+"</span>" +"</br>"+
    "";
}

$.ajax({
  type: "GET",
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'weatherData', // the function to call
  jsonp: 'callback', // name of the var specifying the callback in the request
  error: function (xhr, errorType, exception) {
    var errorMessage = exception || xhr.statusText;
    alert("Excep:: " + exception + "Status:: " + xhr.statusText);
  }
});

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
var url = urlBase + api + '/' + loc;
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

  // Current weather
  ds_current_timestamp  = json.currently.time;
  ds_current_full_date = Date(ds_current_timestamp);
  ds_current_date = dateTime(ds_current_full_date, 'date');
  ds_current_time = dateTime(ds_current_full_date, 'time');
  ds_current_summary  = json.currently.summary;
  ds_current_icon  = json.currently.icon;
  ds_current_nearestStormDistance  = json.currently.nearestStormDistance;
  ds_current_nearestStormBearing  = json.currently.nearestStormBearing;
  ds_current_precipIntensity  = json.currently.precipIntensity;
  ds_current_precipProbability  = json.currently.precipProbability;
  ds_current_temperature  = json.currently.temperature;
  ds_current_apparentTemperature  = json.currently.apparentTemperature;
  ds_current_dewPoint  = json.currently.dewPoint;
  ds_current_humidity  = json.currently.humidity;
  ds_current_windSpeed  = json.currently.windSpeed;
  ds_current_windBearing  = json.currently.windBearing;
  ds_current_visibility  = json.currently.visibility;
  ds_current_cloudCover  = json.currently.cloudCover;
  ds_current_pressure  = json.currently.pressure;
  ds_current_ozone  = json.currently.ozone;

  // Forecast summaries
  ds_hourly_summary  = json.hourly.summary;
  ds_daily_summary  = json.daily.summary;

  // Create Weather Widget
  target.innerHTML =
    "<h4>Nakusp, B.C.</h4>"+
    "<span>"+ds_current_summary+",</span>"+ "</br>"+
    "<span>Temperature is: "+ds_current_temperature+"</span>" +"</br>"+
    "<span>Feels Like: "+ds_current_apparentTemperature+"</span>" + "</br>" +
    "<span>Short Term: "+ds_hourly_summary+"</span>" +"</br>"+
    "<span>Long Term: "+ds_daily_summary+"</span>" +"</br>"+
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

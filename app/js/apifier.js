// apifier.js //
// Uses ajax and jsonp to retreive feeds from
// Epicurious.com, Food52.com, LuckyPeach.com,
// Saveur.com and Foodandwine.com
//------------------------------------------------------------------//

// Load api
$.ajax({
   url: './apifier.json',
   async: false,
   dataType: 'json',
   success: function (data) {
       apifierData = data;
       apifierApi = data.user;
   }
});

// VARIABLES
var urlBase = 'https://api.apifier.com/v1/';
var api = apifierApi;
var crawlId = '359hHayJT8Cefmu2R';
var token = '?token=rQCrS5BnTTp3J46P7SkxHam89';
var results = 'https://api.apifier.com/v1/execs/NmgfWdWMpgLye5KQ2/results';

// load recent results

// use the json from the above results
// to load new data

// loads test to data on page
$(function(){
  $.getJSON(results, function (data){
    json = JSON.stringify(data);
    console.log(json);
  });
});

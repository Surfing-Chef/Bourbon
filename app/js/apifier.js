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
       //apifierData = data;
       apifierApi = data.user;
   }
});

// VARIABLES
var prefix = 'https://api.apifier.com/v1/';
var api = apifierApi;
var crawlId = '359hHayJT8Cefmu2R';
var suffix = '/crawlers/'+crawlId+'?token=rQCrS5BnTTp3J46P7SkxHam89';
var urlSettings = prefix + apifierApi + suffix;

// Load apifier settings
$.ajax({
   url: urlSettings,
   async: false,
   dataType: 'json',
   success: function (data) {
     apifierSettings = data.lastExecution.resultsUrl;
   }
});

// load data to page
function displayAplifier(obj){
  var temp = [];
  var feedArray = [];
  Object.keys(obj).forEach(function(key){
    temp.push(obj[key].pageFunctionResult);
  });

  // discard empty arrays
  for(var a=0; a<temp.length; a++){
    for(var b=0; b<5; b++){
      if(temp[a][b].length > 0){
        feedArray.push(temp[a][b]);
      }
    }
  }

  // create objects for easy deployment to page
  // base, imageUrl, linkUrl, title, topic
  var epicurious = feedArray[0];
  var food52 = feedArray[1];
  var luckypeach = feedArray[2];
  var saveur = feedArray[3];
  var foodandwine = feedArray[4];

  // add label value to each arrays
  epicurious.name = 'epicurious';
  food52.name = 'food52';
  luckypeach.name = 'luckypeach';
  saveur.name = 'saveur';
  foodandwine.name = 'foodandwine';



  function show(obj){
    // get object name
    var objName = obj.name;
    var link = '';

    obj.forEach(function(dta){
      // if links have http prefix...
      if(dta.linkUrl.startsWith('http://')){
        var tag = $('<a href="'+dta.linkUrl+'" target="_blank">'+dta.title+'</a><br>');
        $("#"+objName).append(tag);
      }
      // if links DO NOT have http prefix...
      else {
        var link = dta.base + dta.linkUrl;

        var tag1 = $('<a href="'+link+'" target="_blank">'+dta.title+'</a><br>');
        $("#"+objName).append(tag1);
      }
    });
  }

  show(epicurious);
  show(food52);
  show(luckypeach);
  show(saveur);
  show(foodandwine);



}

// load APLIFIER data
$.ajax({
  url: apifierSettings,
  async: false,
  dataType: 'json',
  success: function (data) {
    displayAplifier(data);
  }
});

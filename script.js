$(document).ready(function() {

//Get Info
$.ajax('https://api.parse.com/1/classes/newsitem', 
  {
    beforeSend: function(request) {
      request.setRequestHeader('X-Parse-Application-Id', '89jlhiK1Rylg77vMfVcFzBMVtGrGI4ntJ5i1aNWY');
            request.setRequestHeader('X-Parse-REST-API-Key', 'uDinDoZlF0rv4SH9bpmO3YeFQxzAHpS6wdDbqNij');
        }
    }
).done(function(response) {
	var news = response.results;
	console.log(news);
  //populate list here with jQuery

  var article =document.createElement('div');
  var title = document.createElement('h1');
  var content = document.createElement('p');


  $(title).text(news[1].title).appendTo(article);
  $(content).text(news[1].body).appendTo(article);
  $(article).addClass("newsitem").appendTo(".container");

});



});
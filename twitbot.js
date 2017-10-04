var Twit = require('twit');

var T = new Twit({
  consumer_key:         '""',
  consumer_secret:      '""',
  access_token:         '""',
  access_token_secret:  '""',
});

var params ={
 q: 'killeen',
 count:100
}

T.get('search/tweets',params,gotData);

function gotData(err,data,response){
	 var tweets= data.statuses;
	 for(var i=0;i<tweets.length;i++){

	  console.log(tweets[i].text);
}};
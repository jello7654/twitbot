console.log("the bot is starting");

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'jcpzsRHHGSgDN6mgvODk6yIS2',
  consumer_secret:      'EuUbB8JW9LHOvEQsiQTjNfiPJwbrV8d3FeLGLIR6c0bhfNNimF',
  access_token:         '3249050029-xl1cXMFtjhqTaCkZemUigGvb3oRmkYhdad12E1Q',
  access_token_secret:  'l09Krv9XNkXLLFrpAC1LmZN7g77gfOOC433f7G2ZGRfnh',
});

//var math= Math.random()*2*10;
//var mathpi= Math.PI*math ;

setInterval(tweetIt,10000*200)
tweetIt()
function tweetIt(){
var arrOfMagicSayings = [
  "It is not worth the bother of killing yourself, since you always kill yourself too late.",
  "Write books only if you are going to say in them the things you would never dare confide to anyone.",
  "Chaos is rejecting all you have learned, Chaos is being yourself.",
  "A book is a suicide postponed.",
  "I did not say this",
  "living is easy with eyes closed , misunderstanding all you see",
  "Love is all you need",
  "What do you do from morning to night? ... I endure myself.",
  "If we could truly see ourselves the way others see us we'd disappear on the spot.",
  "I cannot contribute anything to this world because I only have one method: agony.",
  " I would not trust a quote found on the internet",
  "I\'m Mary Poppins y\'all",
  "biscuits and mustard mmmm",
  "Revenge is not always sweet, once it is consummated we feel inferior to our victim",
  "Between the demand to be clear,and the temptation to be obscure, impossible to decide which deserves more respect.",
  "I have always struggled, with the sole intention of ceasing to struggle. Result: zero.",
];

var randomIndex = Math.round(Math.random() * arrOfMagicSayings.length);


T.post('statuses/update', { status:arrOfMagicSayings[randomIndex] + ` -Emil Cioran-`},
 function(err, data, response) {
  console.log(data)
})}
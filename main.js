// Criamos o novo parágrago depois

var tweets = document.createElement('p');

var newTweet = document.createTextNode('input');
newTweet.appendChild(tweets);

// Armazenamos em uma varipavel o pai e em outra variável o segundo parágrafo
var twitterPage = document.getElementById('twitterPage');
var inputTwitter = twitterPage.getElementsByTagName('input')[1];

// Agora inserimos depois
twitterPage.insertBefore(tweets, inputTwitter);

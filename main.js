
var submitTwitter = document.querySelector ('.tweetButton');
var inputTwitter = document.querySelector('.tweetText');
var twitterForm = document.querySelector('.tweetForm');


//contando caracteres
var counting = document.querySelector('#counter');
inputTwitter.addEventListener('keyup', countCharacters);

function countCharacters(){ 
    var inputTwitterLength = inputTwitter.value.length;
    var maxCharacters =140;
    var characteresLeft = maxCharacters - inputTwitterLength;
    counting.innerHTML = characteresLeft;
    if(inputTwitterLength > 0){
        submitTwitter.disabled =false;
        if(inputTwitterLength > 120){
            counting.style= "color: purple";
        }
        if(inputTwitterLength > 130){
            counting.style= "color: violet";
        }
        if(inputTwitterLength > 140  ){
            counting.style= "color: red";
            submitTwitter.disabled =true;
        } 
    }
}

//publicando os Twitter
submitTwitter.onclick = function(event){
    var twitterPage = document.getElementById('twitterPage'); 
    var tweets = document.createElement('p');
    tweets.textContent = inputTwitter.value;
    twitterPage.appendChild(tweets);
    event.preventDefault(); 
    twitterForm.reset();
    counting.innerHTML = '140';
    submitTwitter.disabled = true;
}









var submitTwitter = document.querySelector ('.tweetButton');
var inputTwitter = document.querySelector('.tweetText');
var twitterForm = document.querySelector('.tweetForm');

//contando caracteres
var counting = document.querySelector('#counter');
inputTwitter.addEventListener('keyup', countCharacters);
var maxCharacters =140;
function countCharacters(){ 
    var inputTwitterLength = inputTwitter.value.length;
    var characteresLeft = maxCharacters - inputTwitterLength;
    counting.innerHTML = characteresLeft;
    if(inputTwitterLength > 0){
        counting.style= "color: black";
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

//aumento área do texto
inputTwitter.addEventListener('keydown', autoResize);
function autoResize(){
    if(inputTwitter.value.length !== 0){
        setTimeout(function(){
            inputTwitter.style= "height:auto; padding:0";
            inputTwitter.style= "height:" + inputTwitter.scrollHeight + "px";
        },0);
    } else{
        inputTwitter.removeAttribute("style");
    }
}

//publicando os Twitter
//colando data
submitTwitter.addEventListener('click', submit);
function submit (){
    var twitterPage = document.getElementById('twitterPage'); 
    var tweets = document.createElement('div');
    tweets.classList.add("myTweet");
    var newTweet = document.createElement('p');
    newTweet.classList.add("newTweet");
    var date = document.createElement('small');

    newTweet.textContent = inputTwitter.value;
    date.textContent = moment().format('MMMM Do YYYY, HH:mm');

    twitterPage.appendChild(tweets);
    tweets.appendChild(newTweet);
    tweets.appendChild(date);

    event.preventDefault(); 

    twitterForm.reset();
    counting.innerHTML = maxCharacters;
    counting.style = "color:black";
    inputTwitter.style = "heigth: 3vw";
    submitTwitter.disabled = true;
}

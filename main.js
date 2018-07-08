var submitTwitter = document.querySelector ('button');
submitTwitter.onclick = function(event){
    var inputTwitter = document.querySelector('input');
    var backgroundImgContainer = document.getElementById('backgroundImgContainer'); 
    var tweets = document.createElement('p');
    tweets.textContent = inputTwitter.value;
    backgroundImgContainer.appendChild(tweets);
    event.preventDefault();
}













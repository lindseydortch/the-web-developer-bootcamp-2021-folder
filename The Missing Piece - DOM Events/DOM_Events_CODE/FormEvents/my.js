const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  //const usernameInput = document.querySelectorAll('input')[0];
  //const tweetInput = document.querySelectorAll('input')[1];
  const usernameInput = this.elements.username;
  const tweetInput = this.elements.tweet;
  //console.log(usernameInput.value, tweetInput.value);
  // console.log('SUBMITTED');

  addTweet(usernameInput.value, tweetInput.value)
  usernameInput.value = '';
  tweetInput.value = '';
})

const addTweet = (usernameInput, tweetInput) => {
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(usernameInput);
  newTweet.append(bTag);
  newTweet.append(`- ${tweetInput}`);
  tweetsContainer.append(newTweet);
}
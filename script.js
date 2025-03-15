const followButton = document.getElementById('follow-button');
const followNumber = document.querySelector('.follow-number');
const messageButton = document.getElementById('message-button');
const messageNumber = document.querySelector('.message-number');
const switchButton = document.querySelector('.switch-button');

followButton.addEventListener('click', function() {
  let currentFollow = parseInt(followNumber.textContent);
  followNumber.textContent = currentFollow + 1;
});

messageButton.addEventListener('click', function() {
  let currentMessage = parseInt(messageNumber.textContent);
  messageNumber.textContent = currentMessage + 1;

});

switchButton.addEventListener('click', function() {
  document.body.classList.toggle('black-theme');
  
});

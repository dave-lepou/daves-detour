let tapaCards = document.querySelectorAll('.tapa-card')

// Make function for my cards when clicked
function tapaWhaDropdown() {
  this.classList.toggle('active')
}

// Function to attach eventlistener for when clicked
function attachClickListener(singleCard) {
  singleCard.addEventListener('click', tapaWhaDropdown)
}

//Loop through all cards and apply the setup function to each one
tapaCards.forEach(attachClickListener)

//Practice code
//let tapaCards = document.querySelectorAll('.tapa-card');

// Loop through each card directly
//tapaCards.forEach(function(singleCard) {

// Attach a click listener to that card
//singleCard.addEventListener('click', function() {
//singleCard.classList.toggle('active');
//});

//});

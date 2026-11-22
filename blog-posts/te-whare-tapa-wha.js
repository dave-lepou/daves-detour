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

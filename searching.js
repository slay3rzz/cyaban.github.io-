// Function to handle the search input
function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    // Get the "trending" section
    var trendingSection = document.querySelector('.trending');
    // Get the specified section you want to hide
    var sportsSection = document.querySelector('.your-section'); // Replace '.your-section' with the actual class or ID of your section

    // Convert the search input value to lowercase for case-insensitive search
    var searchTerm = input.value.toLowerCase();

    var resultsFound = false; // Flag to track if any results were found

    // Loop through all game cards
    gameCards.forEach(function(card) {
        var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

        // Check if the game title contains the search term
        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Show the card if it matches the search term
            resultsFound = true; // Set the flag to true since a result was found
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });

    // Hide or show the "trending" section and the specified section based on the flag
    if (resultsFound) {
        trendingSection.style.display = 'block'; // Show the "trending" section if results were found
        sportsSection.style.display = 'block'; // Show the specified section if results were found
    } else {
        trendingSection.style.display = 'none'; // Hide the "trending" section if no results were found
        sportsSection.style.display = 'none'; // Hide the specified section if no results were found
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);

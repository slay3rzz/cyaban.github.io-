function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    // Get the element where you want to display the "No results found" message
    var noResultsMessage = document.querySelector('.no-results-message');

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

    // Hide or show the "No results found" message based on the flag
    if (resultsFound) {
        noResultsMessage.style.display = 'none'; // Hide the message if results were found
    } else {
        noResultsMessage.style.display = 'block'; // Show the message if no results were found
    }

    // Hide or show the trending sections based on the flag
    var trendingSections = document.querySelectorAll('.trending.container');
    trendingSections.forEach(function(section) {
        // Modify this part to target specific sections using a unique identifier
        var sectionId = section.getAttribute('id');
        var link = section.querySelector('h5.view-more a');
        
        if (sectionId === 'trending') {
            if (!resultsFound) {
                section.style.display = 'none'; // Hide the section if no results were found
                link.href = 'your_link_here'; // Change the link's href attribute
            } else {
                section.style.display = 'block'; // Show the section if results were found
                // Update the link's href attribute with the appropriate value
                link.href = 'your_new_link_here';
            }
        }
    });

    // Hide the <a> elements with class "view-more" if no results were found
    var viewMoreLinks = document.querySelectorAll('.view-more a');
    viewMoreLinks.forEach(function(link) {
        if (!resultsFound) {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        }
    });

    // Hide the pagination if there is text in the search input
    var pagination = document.querySelector('.pagination');
    if (input.value.length > 0) {
        pagination.style.display = 'none';
    } else {
        pagination.style.display = 'block';
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("joke-genre");
    const searchButton = document.getElementById("search");
    const display = document.getElementById("display");
    
    

    searchButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        console.log(input.value); 

        fetch("http://localhost:3000/jokes")
    .then(response => response.json()) 
    .then(data => {
        console.log("API Response:", data); // Debugging: Log the full API response

        // Get the input value and convert to lowercase
        const genre = input.value.trim().toLowerCase();

        // Filter jokes based on category
        const filteredJokes = data.filter(joke => 
            joke.category.toLowerCase() === genre
        );

        console.log("Filtered Jokes:", filteredJokes); // Log the filtered jokes

        // Display the jokes
        display.innerHTML = filteredJokes.map(joke => 
            joke.type === "single" ? `<p>${joke.joke}</p>` : 
            `<p>${joke.setup} <br> <strong>${joke.punchline}</strong></p>`
        ).join("");
    })
    .catch(error => console.error("Error fetching jokes:", error));
    })
  
});


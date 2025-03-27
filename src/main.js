document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("joke-genre");
    const searchButton = document.getElementById("search");
    const display = document.getElementById("display");
    const addJokeBtn = document.getElementById("add-joke-btn");
    const newCategory = document.getElementById("new-category");
    const newSetup = document.getElementById("new-setup");
    const newPunchline = document.getElementById("new-punchline");

    addJokeBtn.addEventListener("click", function (event) {
        event.preventDefault();

        // Get user input values
        const category = newCategory.value.trim();
        const setup = newSetup.value.trim();
        const punchline = newPunchline.value.trim();

        // Ensure category and setup are provided
        if (!category || !setup) {
            alert("Please enter a category and setup for the joke.");
            return;
        }

        // Create a joke object with a random ID
        const newJoke = {
            id: Math.random().toString(36).substr(2, 9), // Generate a random ID
            category: category,
            type: "twopart",
            setup: setup,
            punchline: punchline
        };

        // Send joke to server
        fetch("http://localhost:3000/jokes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newJoke)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Joke added:", data);
                alert("Joke added successfully!");

                // Clear input fields
                newCategory.value = "";
                newSetup.value = "";
                newPunchline.value = "";
            })
            .catch(error => console.error("Error adding joke:", error));
    });

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(input.value);

        fetch("http://localhost:3000/jokes")
            .then(response => response.json())
            .then(data => {
                console.log("API Response:", data);

                // Get the input value and convert to lowercase
                const genre = input.value.trim().toLowerCase();

                // Filter jokes based on category
                const filteredJokes = data.filter(joke =>
                    joke.category.toLowerCase() === genre
                );

                console.log("Filtered Jokes:", filteredJokes);

                // Display the jokes
                display.innerHTML = filteredJokes.map(joke => 
                    `<div class="joke-card">
                        <h3>${joke.category} Joke</h3>
                        ${joke.type === "single" ? `<p>${joke.joke}</p>` : 
                        `<p>${joke.setup} <br> <strong>${joke.punchline}</strong></p>`}
                    </div>`
                ).join("");
                 
            })
            .catch(error => console.error("Error fetching jokes:", error));
    });
});

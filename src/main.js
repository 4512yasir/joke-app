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
                console.log(data); // Check the fetched data
            })
            .catch(error => console.error("Error fetching jokes:", error));
    })
 
});


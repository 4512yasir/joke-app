document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("joke-genre");
    const searchButton = document.getElementById("search");
    const display = document.getElementById("display");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        console.log(input.value); 
    })
    
});


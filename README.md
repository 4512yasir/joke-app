### Joke-App
A simple web application that allows users to search for jokes by genre, add new jokes, and fetch random jokes. The app interacts with a local JSON server (db.json) for storing and retrieving jokes.

## Features
1. Search Jokes: Find jokes by entering a genre in the search bar.

2. Random Joke: Fetch a random joke from the database.

3. Add New Joke: Users can contribute by adding their own jokes.

4. Local JSON Database: Jokes are stored in a local db.json file.

### Technologies Used
 1. Frontend: HTML, CSS, JavaScript

1. Backend: JSON Server (db.json)

# Getting Started

Clone the repository:
git clone https://github.com/4512yasir/joke-app.git
cd joke-app
json-server --watch db.json
Open index.html in your browser.

### JSON Structure (db.json)
The database follows this format:

{
  "jokes": [
    {
      "id": "1",
      "category": "Programming",
      "type": "twopart",
      "setup": "Why do programmers prefer dark mode?",
      "punchline": "Because light attracts bugs!"
    }
  ]
}
### Usage
Enter a genre in the search bar and click Search to find jokes.

Click Get Random Joke to display a random joke.

Use the Add a Joke form to contribute new jokes to the database.

## Author
YASIR MOHAMMED AHMED
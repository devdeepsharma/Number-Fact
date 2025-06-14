# Number Facts App

A simple web application that fetches and displays interesting facts about any number you enter.

## Demo

Enter any number and get a random fact related to it using the [Numbers API](http://numbersapi.com/).

## Features

- User-friendly interface built with Bootstrap 5
- Fetches number facts dynamically via JavaScript and the Numbers API
- Responsive design for all device sizes
- Hides fact display if no number is entered

## Technologies Used

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (Fetch API)
- Numbers API (http://numbersapi.com/)

## How to Use

1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.
3. Enter any number in the input box.
4. Instantly see a random fact about the entered number.

## File Structure

- `index.html` — Main HTML file containing the UI and structure.
- `main.js` — JavaScript file responsible for fetching and displaying facts.

## Example Code Snippet

```js
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getfactFetch);

function getfactFetch() {
  let number = numberInput.value;

  fetch('http://numberapi.com/' + number)
    .then(response => response.text())
    .then(data => {
      if (number !== '') {
        document.querySelector('#fact').style.display = 'block';
        document.querySelector('#factText').innerText = data;
      } else {
        document.querySelector('#fact').style.display = 'none';
      }
    })
    .catch(err => console.error(err));
}

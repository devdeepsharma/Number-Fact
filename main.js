let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getfactFetch);

function getfactFetch(){
  let number = numberInput.value;

  fetch('http://numberapi.com/'+number)
    .then(response => response.text())
    .then(data => {
      if(number != ''){
        fact.style.display = 'block';
        factText.innerText = data;
      }
      else{
        fact.style.display = 'none';
      }
    })
    .catch(err => console.log(err));
}


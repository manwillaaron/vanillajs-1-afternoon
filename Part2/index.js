console.log('the house will always win');

// const idInput = document.getElementById('idInput')
// const colorInput = document.getElementById('colorInput')

// console.log(idInput)
// console.log(colorInput)

// function setCard(){
//     const card = document.getElementById(idInput.value);
//     card.style.color = colorInput.value
//     console.log(card);
// }

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}

function reset() {
    
}
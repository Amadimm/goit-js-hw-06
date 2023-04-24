



let counter = 0;
let currentValue = document.querySelector("#value");
let addCounterBtn = document.querySelector('[data-action="increment"]');
let decreseCounterBtn = document.querySelector('[data-action="decrement"]');


function addOne() {
  counter = counter + 1;
  currentValue.textContent = counter;
}


function decreseOne() {
  counter = counter - 1;
  currentValue.textContent = counter;
}



addCounterBtn.addEventListener("click", addOne);
decreseCounterBtn.addEventListener("click", decreseOne);
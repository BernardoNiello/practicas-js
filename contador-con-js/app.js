const counter = document.getElementById("counter");
const incrementButton=document.getElementById("increment");
const decrementButton=document.getElementById("decrement");

let initialCounter = 0;


const sumar = () => {
initialCounter++; 
 counter.innerHTML =initialCounter;
} 

const restar = () => {
  if (initialCounter<=0) return;
  initialCounter--; 
  counter.innerHTML = initialCounter;
}
incrementButton.addEventListener("click", sumar);
decrementButton.addEventListener("click", restar);

counter.innerText =initialCounter;
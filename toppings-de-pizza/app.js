const toppings =document.getElementsByClassName('topping');

for (const toppings of toppings) {
    toppings.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    })
}
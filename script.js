const colorBtn = document.querySelector('#colorButton')
const hoverBtn = document.querySelector("#hoverButton")

const hero = document.querySelector('.hero')

colorBtn.addEventListener('click', function () {
    // hero.style.backgroundColor = 'black';
    hero.style.fontSize = "3.5rem";
    console.log("color button clicked")
})

hoverBtn.addEventListener('mouseover', function (){
    hoverBtn.style.backgroundColor = "green"
    console.log("hovered over the button")
})

hoverBtn.addEventListener('mouseout', function (){
    hoverBtn.style.backgroundColor = ""
    console.log("mouse away from the button")
})
//change 1


const countBtn = document.querySelector("#countButton")
const clicksLabel = document.querySelector("#clicks")

let noOfclicks = 0;

countBtn.addEventListener('click' , function(){
    noOfclicks++;
    clicksLabel.textContent = "No of clicks :" + noOfclicks; 
    // clicksLabel.textContent = `No of clicks : ${noOfclicks}`;


})


//branch test 1 
//branch test 2
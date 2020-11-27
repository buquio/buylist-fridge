let buyListDisplay;
let fridgeListDisplay;

window.onload = function(){
    const downButton = document.querySelector('#down')
    const upButton = document.querySelector('#up')
    buyListDisplay = document.querySelector('#first-list')
    fridgeListDisplay = document.querySelector('#second-list')
    
    upButton.addEventListener('click', moveUp)
    downButton.addEventListener('click', moveDown)
    }
    
const buyList = ['almond milk', 'avocado', 'cheese', 'halloumi' ]
const fridge = [] //fridgelist

//Challenge1: Please fill the fridge with 5 items of your choice. 
fridge.push('onion', 'salad', 'chocolate', 'crisps', 'egg')


//Challenge 2: You have bought some almond milk. Please remove it from the
//buyList and add it to the items in fridge.
// let item = buyList.shift()
// fridge.unshift(item)
// or
for(let i=0; i<=buyList.length; i++) {
    if(buyList[i]=== "almond milk"){
        // buyList[i]=fridge.unshift(buyList[i])
        buyList[i]=fridge.push(buyList[i])

    }
}
// or  
// let item = buyList[0]
// fridge[0]=item


//BONUS 1:Write a function that will remove an item from the fridge 
// and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
    let grocery = fridge.pop()
    buyList.push(grocery)
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}

//BONUS 2:Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
    let item = buyList.pop()
    fridge.unshift(item)
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}



// buyListDisplay.innerHTML = buyList
// fridgeListDisplay.innerHTML = fridge
document.addEventListener('DOMContentLoaded', () => {


const squares = document.querySelectorAll('.grid div')
const scoreDisplay = document.querySelector('span')
const startBtn = document.querySelector('.start')


const width = 10
let currentIndex = 0 //first div in our grid
let appleIndex = 0 //first div in our grid
let currentSnake = [2,1,0] //div in our grid 2 for the, 1 for body, 0 for tail
let direction = 1
let score = 0
let speed = 0.9
let intervalTime = 0
let interval = 0


// 02 to start, and restart the game
function resetFunc(){
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score = 0
    randomApple()
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2,1,0]
    currentIndex = 0 
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)
}


// 03 function that deals with All the ove outcomes of the Snake
function moveOutcomes(){


    // 01 deals with snake hitting the border and hitting self
    if(
        (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom
        (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake hits top
        squares[currentSnake[0] + direction].classList.contains('snake')//if snake goes into itself
        ){
        alert("What a Looser you are!")
        return clearInterval(interval)//this clears the interval if any of the above happens;
    }


    const tail = currentSnake.pop()//removes last ite of the array and shows it
    squares[tail].classList.remove('snake')//removes class of snake from the tail
    currentSnake.unshift(currentSnake[0] + direction)//gives direction to the head of the array



    // 02 deals with snake getting apple
    if(squares[currentSnake[0]].classList.contains('apple')){
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        randomApple()
        score++
        scoreDisplay.textContent = score
        clearInterval(interval)
        intervalTime = intervalTime * speed
        interval = setInterval(moveOutcomes, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
}



// 04 generate new apple once apple is eaten 
function randomApple(){
    do{
        appleIndex = Math.floor(Math.random() * squares.length)
    }while(squares[appleIndex].classList.contains('snake'))//making sure apple 
    squares[appleIndex].classList.add('apple')
}



// 01 assign functions to keycodes
function control(e){
    squares[currentIndex].classList.remove('snake')//removing the class of the snake from all the squares
    
    if(e.keyCode === 38){
        direction = -width//snake will go up ten divs, appearing to go up
    }else if(e.keyCode === 39){
        direction = 1//snake will go right one div
    }else if(e.keyCode === 40){
        direction = +width//snake head will instantly appear in the div ten divs from where you are now;
        // console.log(direction = +width);
    }else if(e.keyCode === 37){
        direction = -1//snake will go left one div
    }
}
document.addEventListener('keyup', control)
startBtn.addEventListener('click', resetFunc)

})
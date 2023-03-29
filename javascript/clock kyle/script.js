setInterval(setClock, 1000)

const handHour = document.querySelector('.hour')
const handMinute = document.querySelector('.minute')
const handSecond = document.querySelector('.second')

function setClock(){
    const getTime = new Date()
    let getSecond = getTime.getSeconds() / 60
    let getMinute = (getSecond + getTime.getMinutes()) / 60
    let getHour = (getMinute + getTime.getHours()) / 12
    setRotation(handSecond, getSecond)
    setRotation(handMinute, getMinute)
    setRotation(handHour, getHour)
}

function setRotation(element, rotationRatio){
    element.style.setProperty("--rotate", rotationRatio * 360)
}
setClock()
// console.log("Start Warten für 3 Skeunden")
// setTimeout(function showText() {
//     console.log('Erledigt. Du hast 3 Sekunden verschwendet')
// }, 3000)

//    let intervalID; 
//function toggleColor() {
//     let e = document.getElementById('flashtext');
//     e.style.color = e.style.color == 'red' ? 'blue' : 'red';
// }

// function stop() {
//     clearInterval(intervalID);
// }

// function start() {
//     intervalID = setInterval(toggleColor, 1000);
// }
// function myTime() {
//     let timeDate = new Date()
//     console.log(timeDate.toLocaleTimeString('de-DE'))
// }
// let intervalID = setInterval(myTime, 1000)
let intervalID;
let counter = 10;
intervalID = setInterval(countDown, 1000)
function countDown() {
    if (counter > 1) {
        counter--;
        console.log(counter)
    }
    else {
        console.log("Endlich Feierabend!")
        clearInterval(intervalID)
    }
}
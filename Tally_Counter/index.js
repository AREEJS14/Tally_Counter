let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEL.textContent=count 
}

function save() {
    let counter = count + " - "
    saveEL.textContent += counter
    countEL.textContent=0
    count = 0 
}
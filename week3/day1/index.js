let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let firstEntry = true
function increment() {
    count = count + 1
    countEl.textContent = count
}

function resetCounter() {
    count = 0
    countEl.textContent = count
}

function save() {
    const separator = firstEntry ? "" : " - "
    saveEl.textContent += separator + count
    firstEntry = false
    resetCounter()
}
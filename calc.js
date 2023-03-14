const numBtn = []
const rows = []
const grid = document.querySelector('.grid')
let currentRow = -1
function newRow() {
    currentRow++
    rows.push(document.createElement('p'))
    rows[currentRow].className = 'row'
    grid.appendChild(rows[currentRow])
}
newRow()
for(let i = 0; i < 10; i++) {
    numBtn.push(document.querySelector(`#num-btn-${i}`))
    numBtn[i].addEventListener('click', numClick(i))
}
function numClick(i) {
    return function() {
        rows[currentRow].textContent += ' ' + numBtn[i].textContent
    }
}

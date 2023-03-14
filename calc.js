const numBtn = []
const rows = []
const grid = document.querySelector('.grid')
function numClick() {
    return function() {
        rows.push(document.createElement('p'))
        rows[i].className = 'row'
        rows[i].textContent = i
        grid.appendChild(rows[i])
    }
}
for(let i = 0; i < 10; i++) {
    numBtn.push(document.querySelector(`#num-btn-${i}`))
    numBtn[i].addEventListener('click', numClick)
}

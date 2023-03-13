const numBtn = []
const rows = []
for(let i = 0; i < 10; i++) {
    numBtn.push(document.querySelector(`#num-btn-${i}`))
    numBtn[i].addEventListener('click', numClick())
}
function numClick() {
    return function() {
        rows.push(document.createElement('p'))
        rows[i]
    }
}
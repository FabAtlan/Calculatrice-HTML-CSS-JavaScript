let btn = document.getElementsByClassName('btn')
let screen = document.getElementById('screen')

for (let i = 0; i < btn.length; i++) {
  let data
  btn[i].addEventListener('click', () => {
    data = Number(btn[i].textContent)
    screen.value += data
  })
}
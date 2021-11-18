class Money {
  constructor(name, mValue) {
    this.value = parseInt(document.getElementById(name).value || 0, 10) * mValue
    this.name = name
  }
}

let moneyDiv
let total

function run() {
  moneyDiv = []
  total = parseInt(document.getElementById('rouleaux').value || 0, 10)
  moneyDiv.push(new Money("100d", 100))
  moneyDiv.push(new Money("50d", 50))
  moneyDiv.push(new Money("20d", 20))
  moneyDiv.push(new Money("10d", 10))
  moneyDiv.push(new Money("5d", 5))
  moneyDiv.push(new Money("2d", 2))
  moneyDiv.push(new Money("25c", 0.25))
  moneyDiv.push(new Money("10c", 0.1))
  moneyDiv.push(new Money("5c", 0.05))


  for (let data of moneyDiv) {
    total += data.value
  }
  document.getElementById("total").innerHTML = `total: ${total}$`
  document.getElementById("depot").innerHTML = `depot: ${total-250}$`
}
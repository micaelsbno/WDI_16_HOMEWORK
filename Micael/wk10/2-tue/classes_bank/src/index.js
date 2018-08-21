const BankAccount = require('./BankAccount')

app = document.querySelector('.bank')
balance = document.createElement('h1')

var database = []

document.querySelector('.create').addEventListener('click', ()=>{
  account = new BankAccount(document.querySelector('.account').value)
  database.push(account)
  createAccount(account)
})

function createAccount(account){
  acc = document.createElement('div')
  acc.className = 'new-acc'
  acc.dataset.id = database.length
  balance = document.createElement('h1')
  balance.textContent = account.showBalance()
  input = document.createElement('input')
  input.className = 'acc-input'
  buttonOne = document.createElement('button')
  buttonOne.textContent = 'Withdraw'
  buttonTwo = document.createElement('button')
  buttonTwo.textContent = 'Deposit'
  acc.appendChild(balance)
  acc.appendChild(input)
  acc.appendChild(buttonOne)
  acc.appendChild(buttonTwo)
  app.appendChild(acc)
}

function withdrawMoney(account){
  accElement = document.querySelectorAll('.new-acc')[account - 1]
  amount = accElement.querySelector('input').value

  database[account - 1].withdraw(Number(amount))
  accElement.querySelector('h1').textContent = database[account - 1].balance

}

function depositMoney(account){
  accElement = document.querySelectorAll('.new-acc')[account - 1]
  amount = accElement.querySelector('input').value
  dbAcc = database[account - 1]
  dbAcc.deposit(Number(amount))
  accElement.querySelector('h1').textContent = database[account - 1].balance
}

app.addEventListener('click', (event)=>{
  account = event.target.parentElement.dataset.id
  if (event.target.textContent === 'Withdraw') {
    withdrawMoney(account)
  } else if (event.target.textContent === 'Deposit') {
    depositMoney(account)
  }
})

// console.log(account.deposit(20))
// console.log(account.deposit(10))
// console.log(account.withdraw(20))
// console.log(account.showHistory())
// console.log(account.showBalance())
class BankAccount{
  constructor(type){
    this.type = type
    this.balance = 0
    this.history = []
  }

  withdraw(amount){
    this.history.push(-Math.abs(amount))
    return this.balance -= amount
  }

  deposit(amount){
    this.history.push(amount)
    return this.balance += amount 
  }

  showBalance(){
    return this.balance
  }

  showHistory(){
    return this.history
  }
}

module.exports = BankAccount
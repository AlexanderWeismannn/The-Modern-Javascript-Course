let myAccount = {
  name:"Alex Wiseman",
  expenses: 0,
  income: 0
}

//addExpenses
let addExpense = function(account, amount){
  account.expenses = account.expenses + amount
}

//addIncome
let addIncome = function(account, income){
  account.income = account.income + income
}
//account reset
let resetAccount = function(account){
  account.expenses = 0
  account.income = 0
}

//account summary
let getAccountSummary = function(account){
  let balance = account.income - account.expenses
  return `Account for ${account.name} has ${balance}$, ${account.income}$ in income and ${account.expenses}$ in expenses.`
}

addExpense(myAccount, 2.50)
addIncome(myAccount, 2000)
addExpense(myAccount, 270)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

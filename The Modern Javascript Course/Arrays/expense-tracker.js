//account object that constains a name, expenses array, income array, and 3 methods
const account = {
    name: "Alexander Weismann",
    expenses: [],
    income: [],
    //creates and adds a new object into the expenses array
    addExpense: function(description,cost){
        this.expenses.push({
            description: description,
            cost: cost
        })   
    },
    // creates and adds a new object into the income array
    addIncome: function(description,revenue){
        this.income.push({
            description: description,
            revenue: revenue
        })
    },
    //returns total income, expenses and the account balance.
    getAccountSummary: function(){
       totalExpenses = 0
       totalIncome = 0
       totalBalance = 0

        //loop through to get total expenses(could use for each)
       for(let i = 0; i < account.expenses.length; i++){
           totalExpenses += account.expenses[i].cost
       }
        //loop through to get total income(could use for each)
       for(let j = 0; j < account.income.length; j++){
            totalIncome += account.income[j].revenue
        }

        //difference between income and expenses
        totalBalance = totalIncome - totalExpenses
       
        //return string with all requisite info mentioned above the function
       return `${account.name} has a balance of $${totalBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }
    
}

//expense = (desceiption, amount)
//addexpense = add descpriton & amount
//getAccountSummary = total up all expenses -> alexander has XXXX exepnses




// const getAccountSummary = function(){

// }

account.addIncome("Work", 3000)
account.addIncome("Gift", 100)
account.addExpense("Rent",1200)
account.addExpense("Groceries",200)
account.addExpense("Coffee", 2)

console.log(account)
console.log(account.getAccountSummary())
module.exports = (app, db) => {

    const income = require('./controllers/income')(db);
    const expense = require('./controllers/expense')(db);

    /*
     *  =========================================
     *  Expense
     *  =========================================
     */
    // CRUD expense
    app.get('/expense/new', expense.newExpenseForm);

    app.post('/expense', expense.createExpense);

    /*  
     *  =========================================
     *  Income
     *  =========================================
     */
    // CRUD income
    app.get('/income/new', income.newIncomeForm);

    app.post('/income', income.createIncome)
};

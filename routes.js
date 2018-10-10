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
    app.get('/expense/:id', expense.getFromId);
    app.get('/expense/:id/edit', expense.editExpenseForm);
    app.get('/expense/:id/delete', expense.deleteForm);

    app.post("/expense/:id", expense.editExpense);
    app.delete("/expense/:id", expense.expenseDelete);

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

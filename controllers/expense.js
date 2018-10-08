var sha256 = require("js-sha256");

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    const newExpenseForm = (request, response) => {
        response.render('expense/NewExpenseForm');
    };

    const createExpense = (request, response) => {

        db.expense.createExpense(request.body, (error, queryResult) => {

            if (error) {
                console.error('error getting expense:', error);
                response.sendStatus(500);
            }

            if (queryResult.rowCount >= 1) {
                console.log('Expense entry created successfully');
                console.log("EXPENSE CONTROLLER: ", request.body)

            } else {
                console.log('Expense entry could not be created');
            }

            // redirect to home page after creation
            response.redirect('/');
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        newExpenseForm,
        createExpense,
    };
};
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

    const getFromId = (request, response) => {
        // console.log("CONTROLLER ID PARAMS", request.params);
        db.expense.getFromId(request.params.id, (error, queryResult) => {
            if (error) {
                console.error('error getting expense:', error);
                response.sendStatus(500);
            } else {
                // console.log("CONTROLLER ID FORM: ", queryResult.rows);
                response.render('expense/GetFromId', {expense: queryResult.rows});
            }
        });
    };

    const editExpenseForm = (request, response) => {
        db.expense.getFromId (request.params.id, (error, queryResult)=>{
            if (error) {
                console.error('error getting expense:', error);
                response.sendStatus(500);
            } else{
                // console.log ("CONTROLLER EDIT FORM: ", queryResult.rows);
                response.render('expense/EditExpenseForm', {expense: queryResult.rows[0]});
            } 

        });
    };

    const editExpense = (request, response) => {
        // console.log("EDIT EXPENSE CONTROLLER");
        db.expense.editExpense(request.params.id, request.body, (error, queryResult) => {
            // console.log("INSIDE CONTROLLER", queryResult);
            if (error) {
                console.error('error getting expense:', error);
                response.sendStatus(500);
            } 
            if (queryResult.rowCount >= 1) {
              console.log("Expense entry edited successfully");
            //   console.log("EXPENSE CONTROLLER: ", request.body);
            } else {
              console.log("Expense entry could not be edited");
            }
            response.redirect('/');
        });
    };

    const deleteForm = (request, response) => {
        db.expense.getFromId(request.params.id, (error, queryResult) => {
            if (error) {
                console.error('error getting expense:', error);
                response.sendStatus(500);
            } else {
                // console.log("CONTROLLER DELETE FORM: ", queryResult.rows);
                response.render('expense/DeleteForm', {expense: queryResult.rows[0]});
            }
        });
    };

    const expenseDelete = (request, response) => {
        console.log("controller delete before")
        db.expense.expenseDelete(request.params.id, (error, queryResult) => {
            if (error) {
                console.error('error getting expense:', error);
                response.sendStatus(500);
            } else {
                response.redirect('/');
            }
        });
    };

    const expenseAll = (request, response) => {
        db.expense.expenseAll (request.body, (error, queryResult) => {
            if (error) {
                console.error('error getting expense:', error);
                response.sendStatus(500);
            } else {
                response.render('expense/ExpenseAll', {expense: queryResult.rows});
            }
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
        getFromId,
        editExpenseForm,
        editExpense,
        deleteForm,
        expenseDelete,
        expenseAll,
    };
};
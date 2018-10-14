var sha256 = require("js-sha256");

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic (Income)
     * ===========================================
     */
    const newIncomeForm = (request, response) => {
        response.render('income/NewIncomeForm');
    };

    const createIncome = (request, response) => {

        db.income.createIncome(request.body, (error, queryResult) => {

            if (error) {
                console.error('error getting income:', error);
                response.sendStatus(500);
            }

            if (queryResult.rowCount >= 1) {
                console.log('Income entry created successfully');
                // console.log("INCOME CONTROLLER: ", request.body)

            } else {
                console.log('Income entry could not be created');
            }

            // redirect to home page after creation
            response.redirect('/');
        });
    };

    const getFromId = (request, response) => {
        // console.log("CONTROLLER ID PARAMS", request.params);
        db.income.getFromId(request.params.id, (error, queryResult) => {
            if (error) {
                console.error('error getting income:', error);
                response.sendStatus(500);
            } else {
                // console.log("CONTROLLER ID FORM: ", queryResult.rows);
                response.render('income/GetFromId', { income: queryResult.rows });
            }
        });
    };

    const editIncomeForm = (request, response) => {
        db.income.getFromId(request.params.id, (error, queryResult) => {
            if (error) {
                console.error('error getting income:', error);
                response.sendStatus(500);
            } else {
                // console.log ("CONTROLLER EDIT FORM: ", queryResult.rows);
                response.render('income/EditIncomeForm', { income: queryResult.rows[0] });
            }

        });
    };

    const editIncome = (request, response) => {

        db.income.editIncome(request.params.id, request.body, (error, queryResult) => {
            if (error) {
                console.error('error getting income:', error);
                response.sendStatus(500);
            }
            if (queryResult.rowCount >= 1) {
                console.log("Income entry edited successfully");
                //   console.log("INCOME CONTROLLER: ", request.body);
            } else {
                console.log("Income entry could not be edited");
            }
            response.redirect('/');
        });
    };

    const deleteForm = (request, response) => {
        db.income.getFromId(request.params.id, (error, queryResult) => {
            if (error) {
                console.error('error getting income:', error);
                response.sendStatus(500);
            } else {
                // console.log("CONTROLLER DELETE FORM: ", queryResult.rows);
                response.render('income/DeleteForm', { income: queryResult.rows[0] });
            }
        });
    };

    const incomeDelete = (request, response) => {
        console.log("controller delete before")
        db.income.incomeDelete(request.params.id, (error, queryResult) => {
            if (error) {
                console.error('error getting income:', error);
                response.sendStatus(500);
            } else {
                response.redirect('/');
            }
        });
    };

    const incomeAll = (request, response) => {
        db.income.incomeAll(request.body, (error, queryResult) => {
            if (error) {
                console.error('error getting income:', error);
                response.sendStatus(500);
            } else {
                response.render('income/IncomeAll', { income: queryResult.rows });
            }
        });
    };
    
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        newIncomeForm,
        createIncome,
        getFromId,
        editIncomeForm,
        editIncome,
        deleteForm,
        incomeDelete,
        incomeAll,
    };
};
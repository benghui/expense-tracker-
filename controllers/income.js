var sha256 = require("js-sha256");

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
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
                console.log("INCOME CONTROLLER: ", request.body)

            } else {
                console.log('Income entry could not be created');
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
        newIncomeForm,
        createIncome,
    };
};
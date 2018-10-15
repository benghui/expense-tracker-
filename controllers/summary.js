module.exports = (db) => {
    /*  
     *  =========================================
     *  Controller logic (Summary)
     *  =========================================
     */


    const summaryMth = (request, response) => {
        db.summary.summaryMth(request.params.id, (error, queryResult, errorTwo, queryResultTwo) => {
            if (error) {
                console.error('error getting expense:', error);
                response.sendStatus(500);
            } else if (errorTwo) {
                console.errorTwo('error getting expenseSum:', errorTwo);
                response.sendStatus(500);
            } else {
                // console.log("CONTROLLER", queryResult.rows)
                // console.log("CONTROLLER TWO", queryResultTwo.rows);
                response.render('summary/summarymth', { expense: queryResult.rows, expenseSum: queryResultTwo.rows });
            }
        });
    };

    const summary = (request, response) => {
        db.summary.summary(request.body, (error, queryResult, errorTwo, queryResultTwo) => {
            if (error) {
                console.error('error getting summary:', error);
                response.sendStatus(500);
            } else if (errorTwo) {
                console.errorTwo('error getting expenseSum:', errorTwo);
                response.sendStatus(500);
            } else {
                // console.log ('CONTROLLER', queryResult.rows);
                response.render('summary/summary', { expense: queryResult.rows, categorySum: queryResultTwo.rows });
            }
        });
    };

    const category = (request, response) => {
        db.summary.category(request.params.category, (error, queryResult, errorTwo, queryResultTwo) => {
            console.log ("CONTROLLER", request.params.category)
            if (error) {
                console.error('error getting summary:', error);
                response.sendStatus(500);
            } else if (errorTwo) {
                console.errorTwo('error getting expenseSum:', errorTwo);
                response.sendStatus(500);
            } else {
                // console.log ('CONTROLLER', queryResult.rows);
                response.render('summary/category', { expense: queryResult.rows, expenseSum: queryResultTwo.rows });
            }
        });
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        summary,
        summaryMth,
        category,
    };
};
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
                response.render('summary/summaryMth', { expense: queryResult.rows, expenseSum: queryResultTwo.rows });
            }
        });
    };

    const summary = (request, response) => {
        db.summary.summary(request.body, (error, queryResult) => {
            if (error) {
                console.error('error getting summary:', error);
                response.sendStatus(500);
            } else {
                // console.log ('CONTROLLER', queryResult.rows);
                response.render('summary/summary', { expense: queryResult.rows });
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
    };
};
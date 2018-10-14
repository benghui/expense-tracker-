module.exports = (db) => {
    /*  
     *  =========================================
     *  Controller logic (Summary)
     *  =========================================
     */
    const summary = (request, response) => {
        db.summary.summaryOct(request.body, (error, queryResult, errorTwo, queryResultTwo) => {
            if (error) {
                console.error('error getting expense:', error);
                response.sendStatus(500);
            } else if (errorTwo) {
                console.errorTwo('error getting expenseSum:', errorTwo);
                response.sendStatus(500);
            } else {
                // console.log("CONTROLLER", queryResult.rows)
                // console.log("CONTROLLER TWO", queryResultTwo.rows);
                response.render('summary/summary', { expense: queryResult.rows, expenseSum: queryResultTwo.rows });
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
    };
};
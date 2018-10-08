var sha256 = require("js-sha256");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
    const createIncome = (income, callback) => {

        // set up query
        const queryString = "INSERT INTO income (income, date, category) VALUES ($1, $2, $3) RETURNING *";
        const values = [income.income, income.date, income.category];

        // execute query
        dbPoolInstance.query(queryString, values, (error, queryResult) => {

            // invoke callback function with results after query has executed
            callback(error, queryResult);
        });
    };

    return {
        createIncome,
    };
};
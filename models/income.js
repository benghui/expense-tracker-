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

    const getFromId = (id, callback) => {
        const queryString = `SELECT * FROM income WHERE id = ${id}`;

        dbPoolInstance.query(queryString, (error, queryResult) => {
            // console.log("INSIDE MODELS", queryResult.rows[0]);
            callback(error, queryResult);
        });
    };

    const editIncome = (id, income, callback) => {
        const queryString = `UPDATE income SET "income" = ($1), "date" = ($2), "category" = ($3) WHERE id = ${id} RETURNING *`;
        const values = [income.income, income.date, income.category];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            callback(error, queryResult);
        });
    };

    const incomeDelete = (id, callback) => {
        console.log("model delete before");
        const queryString = `DELETE from income WHERE id = ${id}`;
        dbPoolInstance.query(queryString, (error, queryResult) => {
            console.log("model after");
            callback(error, queryResult);
        });
    };

    const incomeAll = (income, callback) => {
        const queryString = 'SELECT * FROM income ORDER BY date DESC';
        dbPoolInstance.query(queryString, (error, queryResult) => {
            callback(error, queryResult);
        });
    };

    return {
        createIncome,
        getFromId,
        editIncome,
        incomeDelete,
        incomeAll,
    };
};
var sha256 = require("js-sha256");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  const createExpense = (expense, callback) => {

    // set up query
    const queryString = "INSERT INTO expense (expense, date, category) VALUES ($1, $2, $3) RETURNING *";
    const values = [expense.expense, expense.date, expense.category];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {

      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  return {
    createExpense,
  };
};

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

  const getFromId = (id, callback) => {
    const queryString = `SELECT * FROM expense WHERE id = ${id}`;

    dbPoolInstance.query(queryString, (error, queryResult) => {
      // console.log("INSIDE MODELS", queryResult.rows[0]);
        callback (error, queryResult);
    });  
  };

  const editExpense = (id, expense, callback) => {
    const queryString = `UPDATE expense SET "expense" = ($1), "date" = ($2), "category" = ($3) WHERE id = ${id} RETURNING *`;
    const values = [expense.expense, expense.date, expense.category];

    dbPoolInstance.query (queryString, (error, queryResult) => {
        callback(error, queryResult);
    });
  };

  const expenseDelete = (id, callback) => {
    console.log("model delete before");
    const queryString = `DELETE from expense WHERE id = ${id}`;
    dbPoolInstance.query (queryString, (error, queryResult) => {
      console.log("model after");
      callback (error, queryResult);
    });
  };

  return {
    createExpense,
    getFromId,
    editExpense,
    expenseDelete,
  };
};

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
    // console.log("EDIT EXPENSE MODEL", id);
    // console.log("EDIT EXPENSE MODEL", expense);

    dbPoolInstance.query (queryString, values, (error, queryResult) => {
        callback(error, queryResult);
    });
  };

  const expenseDelete = (id, callback) => {
    // console.log("model delete before");
    const queryString = `DELETE FROM expense WHERE id = ${id}`;
    dbPoolInstance.query (queryString, (error, queryResult) => {
      // console.log("model after");
      callback (error, queryResult);
    });
  };

  const expenseAll = (expense, callback) => {
    const queryString = 'SELECT * FROM expense ORDER BY date DESC';
    dbPoolInstance.query (queryString, (error, queryResult) => {
      callback (error, queryResult);
    });
  };

  const test = (expense, callback) => {
    const queryString = 'SELECT * FROM expense WHERE EXTRACT (MONTH FROM date) = 10 ORDER BY date';
    dbPoolInstance.query (queryString, (error, queryResult) => {
      callback (error, queryResult);
    });
  };


  return {
    createExpense,
    getFromId,
    editExpense,
    expenseDelete,
    expenseAll,
    test,
  };
};

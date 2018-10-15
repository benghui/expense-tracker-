/**
 * ===========================================
 * Export Summary Model
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  const summaryMth = (id, callback) => {
    const queryString = `SELECT * FROM expense WHERE EXTRACT (MONTH FROM date) = ${id} ORDER BY date`;
    dbPoolInstance.query(queryString, (error, queryResult) => {
      // console.log ("queryResult", queryResult);
      if (error) {
        callback(error, queryResult);
        // console.error('error');
      } else {
        const queryStringTwo = `SELECT SUM (expense) FROM expense WHERE EXTRACT (MONTH FROM date) = ${id}`;
        dbPoolInstance.query(queryStringTwo, (errorTwo, queryResultTwo) => {
            if (errorTwo) {
            console.errorTwo('errorTwo');
            }; 
          // console.log ("MODEL TWO", queryResultTwo.rows);
          callback(error, queryResult, errorTwo, queryResultTwo);
        });
      }
    });
  };

  const summary = (expense, callback) => {
    const queryString = `SELECT to_char (date, 'YYYY-MM' ) AS expense_date, SUM (expense) AS expense_sum FROM expense WHERE DATE > date_trunc ('month', date) - INTERVAL '1 year' GROUP BY expense_date WINDOW w AS (ORDER BY to_char(date, 'YYYY-MM')) ORDER BY expense_date DESC`;
    dbPoolInstance.query(queryString, (error, queryResult) => {
      callback(error, queryResult);
      // console.log ("queryResult", queryResult);
      // console.error('error'); 
    });

    // const queryString = `SELECT * FROM expense ORDER BY date`;
    // dbPoolInstance.query (queryString, (error, queryResult) => {
    //   callback (error, queryResult);
    // });
  };

  const category = (category, callback) => {
    const queryString = `SELECT * FROM expense WHERE category = '${category}' ORDER BY date`;
    dbPoolInstance.query(queryString, (error, queryResult) => {
      if (error) {
        callback(error, queryResult);
        // console.error('error');
      } else {
        const queryStringTwo = `SELECT SUM (expense) FROM expense WHERE category = '${category}'`;
        dbPoolInstance.query(queryStringTwo, (errorTwo, queryResultTwo) => {
          if (errorTwo) {
            console.errorTwo('errorTwo');
          };
          // console.log ("MODEL TWO", queryResultTwo.rows);
          callback(error, queryResult, errorTwo, queryResultTwo);
        });
      }
    });
  };
  

  return {
    summaryMth,
    summary,
    category,
  };
};

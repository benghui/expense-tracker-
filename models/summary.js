/**
 * ===========================================
 * Export Summary Model
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  const summaryOct = (expense, callback) => {
    const queryString = 'SELECT * FROM expense WHERE EXTRACT (MONTH FROM date) = 10 ORDER BY date';
    dbPoolInstance.query(queryString, (error, queryResult) => {
      // callback (error, queryResult);
      // console.log ("queryResult", queryResult);
      if (error) {
        callback(error, queryResult);
        // console.error('error');
      } else {
        const queryStringTwo = 'SELECT SUM (expense) FROM expense WHERE EXTRACT (MONTH FROM date) = 10';
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
    summaryOct,
  };
};

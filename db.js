const pg = require("pg");
const income = require("./models/income");
const expense = require("./models/expense");
const summary = require("./models/summary");
const url = require("url");

var configs;

if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(":");

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    ssl: true
  };
} else {
  configs = {
    user: "benghui",
    host: "127.0.0.1",
    database: "expense-tracker",
    port: 5432
  };
}

const pool = new pg.Pool(configs);

pool.on("error", function(err) {
  console.log("idle client error", err.message, err.stack);
});

module.exports = {
  /*
     * ADD APP MODELS HERE
     */
  expense: expense(pool),
  income: income(pool),
  summary: summary(pool),

  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool: pool
};

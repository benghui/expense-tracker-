const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const db = require('./db');
const session = require("express-session");
const sha256 = require("js-sha256");
const uuid = require("uuidv4");
const moment = require("moment");


/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

// Set up middleware
app.use(methodOverride("_method"));

app.use(
    session({
        genid: (request) => {
            return uuid()
        },
        secret: "colossal banana",
        resave: true,
        saveUninitialized: true
        // cookie: { secure: true }
    })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// Link to style.css
app.use(express.static("public"));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

// Import routes to match incoming requests
require('./routes')(app, db);

// Root GET request (it doesn't belong in any controller file)
app.get('/', (request, response) => {
    const queryString = "SELECT * FROM expense ORDER BY date DESC LIMIT 3";
    db.queryInterface(queryString, null, (error, queryResult) => {
        if (error){
            console.error(error);
        } else {
            const queryString = "SELECT * FROM income ORDER BY date DESC LIMIT 3";
            db.queryInterface(queryString, null, (innerError, innerQueryResult) => {
                if (innerError){
                    console.error(innerError);
                } else {
                    const queryString = "SELECT SUM (expense) FROM expense";
                    db.queryInterface(queryString, null, (expenseSumError, expenseSum) => {
                        if (expenseSumError) {
                            console.error(expenseSumError);
                        } else {
                            const queryString = "SELECT SUM (income) FROM income";
                            db.queryInterface(queryString, null, (incomeSumError, incomeSum) => {
                                if (incomeSumError) {
                                    console.error(incomeSumError);
                                } else {
                                    const queryString = 'SELECT ((SELECT SUM (income) FROM income) - (SELECT SUM (expense) FROM expense)) AS "subtraction"';
                                    db.queryInterface(queryString, null, (cashflowError, cashflow) => {
                                        if (cashflowError) {
                                        console.error(cashflowError);
                                        } else { 
                                            // console.log("INDEX")
                                            response.render('home', { expense: queryResult.rows, income: innerQueryResult.rows, expenseSum: expenseSum.rows, incomeSum: incomeSum.rows, cashflow: cashflow.rows });
                                        };
                                    });
                                };
                            });
                        }
                    });
                }
            });
        };
    });
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port ' + PORT + ' ~~~'));

// Run clean up actions when server shuts down
server.on('close', () => {
    console.log('Closed express server');

    db.pool.end(() => {
        console.log('Shut down db connection pool');
    });
});
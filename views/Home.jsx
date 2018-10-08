var React = require("react");

class Home extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style.css" />
                </head>
                <body>
                    <div>
                        <h2>Expense Tracker</h2>
                        <a href="/expense/new">Enter Expense</a>
                        <br />
                        <a href="/income/new">Enter Income</a>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Home;
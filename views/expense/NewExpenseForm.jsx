var React = require("react");

class NewExpenseForm extends React.Component {
    render() {
        return <html>
            <head>
                <link rel="stylesheet" type="text/css" href="/style.css" />
            </head>
            <body>
                <div>
                    <h2>Enter Expense</h2>
                    <form className="expense-form" method="POST" action="/expense">
                        <div className="expense-attribute">
                            <input name="expense" type="number" pattern="[0-9]*" required placeholder="Expense" />
                        </div>
                        <div className="expense-attribute">
                            <input name="date" type="date" />
                        </div>
                        <div className="expense-attribute">
                            <input name="category" type="text" placeholder="Category" />
                        </div>
                        <input name="submit" type="submit" />
                    </form>
                </div>
            </body>
        </html>;
    }
}

module.exports = NewExpenseForm;
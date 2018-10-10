var React = require("react");

class NewIncomeForm extends React.Component {
    render() {
        return <html>
            <head>
              <link rel="stylesheet" type="text/css" href="/style.css" />
            </head>
            <body>
              <div>
                <h2>Enter Income</h2>
                <form className="income-form" method="POST" action="/income">
                  <div className="income-attribute">
                  <input name="income" type="number" pattern="[0-9]*" step="0.01" required placeholder="Income" />
                  </div>
                  <div className="income-attribute">
                    <input name="date" type="date" required/>
                  </div>
                  <div className="income-attribute">
                    <input name="category" type="text" placeholder="Category" required/>
                  </div>
                  <input name="submit" type="submit" />
                </form>
              </div>
            </body>
          </html>;
    }
}

module.exports = NewIncomeForm;
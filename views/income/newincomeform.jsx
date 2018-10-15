var React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");

class NewIncomeForm extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <h2>Enter Income</h2>
        <form className="income-form" method="POST" action="/income">
          <div className="income-attribute">
            <input name="income" type="number" step="0.01" placeholder="Income" required />
          </div>
          <div className="income-attribute">
            <input name="date" type="date" required />
          </div>
          <div className="income-attribute">
            <input name ="category" type="text" placeholder="Category" required />
          </div>
          <input name="submit" type="submit" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = NewIncomeForm;
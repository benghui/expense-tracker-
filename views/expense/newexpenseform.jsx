var React = require("react");
const DefaultLayout = require("../layout/defaultlayout");

class NewExpenseForm extends React.Component {
    render() {
        return(
             <DefaultLayout>
            <h2>Enter Expense</h2>
            <form className="expense-form" method="POST" action="/expense">
              <div className="expense-attribute">
                <input name="expense" type="number" step="0.01" placeholder="Expense" required />
              </div>
              <div className="expense-attribute">
                <input name="date" type="date" required />
              </div>
              <div className="expense-attribute">
                <input name="category" type="text" placeholder="Category" required />
              </div>
              <input name ="submit" type="submit" />
            </form>
        </DefaultLayout>
        );
    }
}

module.exports = NewExpenseForm;
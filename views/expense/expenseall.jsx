var React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");
const moment = require("moment");

class ExpenseAll extends React.Component {
    render() {

        const expenseElement = this.props.expense.map(expense => {
            var urlExpense = "/expense/" + expense.id;
            return (
                <ul key ={expense.id}>
                    <a href={urlExpense}>
                        <li key={expense.id}><b>Expense: </b>${expense.expense}</li>
                        <li key={expense.id}><b>Date: </b>{moment(expense.date).format("MMM Do YYYY")}</li>
                        <li key={expense.id}><b>Category: </b>{expense.category}</li>
                    </a>
                </ul>
            );
        });
        
        return (
            <DefaultLayout>
                <div className="row">
                    <div className="col-sm-4">
                        <br />
                        <a href='/expense'><h4>Expense</h4></a>
                        {expenseElement}
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = ExpenseAll;
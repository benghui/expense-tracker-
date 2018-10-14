const React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");
const moment = require("moment");

class SummaryMth extends React.Component {
    render() {
        //   console.log("inside react", this.props.expense);
        const expenseElement = this.props.expense.map(expense => {
            var urlExpense = "/expense/" + expense.id;
            return (
                <ul key={expense.id}>
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
            <br/>
            <h4>Expense Summary for {moment(this.props.expense[0].date).format("MMM")}</h4>
            <br/>
            <h5>Total: ${this.props.expenseSum[0].sum}</h5>
            {expenseElement}
        </DefaultLayout>);
    }
}

module.exports = SummaryMth;
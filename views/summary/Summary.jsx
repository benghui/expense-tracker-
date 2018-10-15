const React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");
const moment = require("moment");

class Summary extends React.Component {
    render() {
        // console.log("inside react", this.props.expense);
        const expenseElement = this.props.expense.map(expense => {
            var urlExpense = "/summary/month/" + moment(expense.expense_date).format("MM");
            return (
                <ul key = {moment(expense.expense_date).format("MM")}>
                    <a href={urlExpense}>
                        <li key={moment(expense.expense_date).format("MM")}><b>Expense Total: </b>${expense.expense_sum}</li>
                        <li key={moment(expense.expense_date).format("MM")}><b>Month: </b>{moment(expense.expense_date).format("MMM YYYY")}</li>
                    </a>
                </ul>
            );
        });
        return (
            <DefaultLayout>
                <br/>
                <h4>Expense Summary by Month</h4>
                {expenseElement}
            </DefaultLayout>);
    }
}

module.exports = Summary;
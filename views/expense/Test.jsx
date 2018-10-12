const React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");
const moment = require("moment");

class Test extends React.Component {
    render() {
        //   console.log("inside react", this.props.expense);
        const expenseElement = this.props.expense.map(expense => {
            var urlExpense = "/expense/" + expense.id;
            return (
                <ul key={expense.id}>
                    <a href={urlExpense} style={{ color: "black" }}>
                        <li key={expense.id} style={{ listStyleType: "none" }}><b>Expense: </b>${expense.expense}</li>
                        <li key={expense.id} style={{ listStyleType: "none" }}><b>Date: </b>{moment(expense.date).format("MMM Do YYYY")}</li>
                        <li key={expense.id} style={{ listStyleType: "none" }}><b>Category: </b>{expense.category}</li>
                    </a>
                </ul>
            );
        });
        return (
        <DefaultLayout>
            {expenseElement}
        </DefaultLayout>);
    }
}

module.exports = Test;
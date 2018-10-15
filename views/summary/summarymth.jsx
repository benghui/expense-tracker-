const React = require("react");
const DefaultLayout = require("../layout/defaultlayout");
const moment = require("moment");

class SummaryMth extends React.Component {
    render() {

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
            <div className = "row">
                <div className = "col-sm-9">        
                    <br/>
                    <h4>Expense Summary for {moment(this.props.expense[0].date).format("MMM")}</h4>
                    <h5>Total: ${this.props.expenseSum[0].sum}</h5>
                    <br/>
                    <a href="/summary" role="button" className="btn btn-primary">Back to Summary</a>
                    <br/>
                    <br/>
                    <h5>List of Expenses</h5>
                    {expenseElement}
                </div>   
            </div>
        </DefaultLayout>);
    }
}

module.exports = SummaryMth;
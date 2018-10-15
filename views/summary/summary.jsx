const React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");
const moment = require("moment");

class Summary extends React.Component {
    render() {

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


        return <DefaultLayout>
            <div className = "row">
                <div className = "col-sm-6">
                <br />
                <h4>Expense Summary by Month</h4>
                {expenseElement}
                </div>
                <div className = "col-sm-6">
                
                </div>  
            </div>
          </DefaultLayout>;
    }
}

module.exports = Summary;
var React = require("react");
const DefaultLayout = require("./layout/defaultlayout");
const moment = require("moment");

class Home extends React.Component {
    render() {
        // console.log("HOME EXPENSE:", this.props.expense);

        const expenseElement = this.props.expense.map(expense =>{
            var urlExpense = "/expense/" + expense.id;
            return (
                <ul key={expense.id}>
                    <a href= {urlExpense}>
                    <li key={expense.id}><b>Expense: </b>${expense.expense}</li>
                    <li key={expense.id}><b>Date: </b>{moment(expense.date).format("MMM Do YYYY")}</li>
                    <li key={expense.id}><b>Category: </b>{expense.category}</li>
                    </a>
                </ul>
            );
        });
        const incomeElement = this.props.income.map(income => {
            var urlIncome = "/income/" + income.id;
            return (
                <ul key={income.id}>
                    <a href={urlIncome}>
                    <li key={income.id}><b>Income: </b>${income.income}</li>
                    <li key={income.id}><b>Date: </b>{moment(income.date).format("MMM Do YYYY")}</li>
                    <li key={income.id}><b>Category: </b>{income.category}</li>
                    </a>
                </ul>
            );
        });
        return (
            <DefaultLayout>
                <div className = "row">
                    <div className = "col-sm-2">
                        <br/>
                        <a href="/expense/new" role="button" className="btn btn-primary">Enter Expense</a>
                        <br />
                        <br/>
                        <a href="/income/new" role="button" className="btn btn-primary">Enter Income</a>
                        <br />
                        <br />
                        <a href="/summary" role="button" className="btn btn-primary">Summary</a>
                    </div>
                    <div className="col-sm-4">
                        <br />
                        <a href='/expense'><h4>Expense</h4></a>
                        <h6>Total: ${this.props.expenseSum[0].sum}</h6>
                        {expenseElement}
                    </div>
                    <div className="col-sm-3">
                        <br />
                        <a href='/income'><h4>Income</h4></a>
                        <h6>Total: ${this.props.incomeSum[0].sum}</h6>
                        {incomeElement}
                    </div>  
                    <div className="col-sm-3">
                        <br />
                        <h3>Cash Flow: ${this.props.cashflow[0].subtraction}</h3>
                        <br />
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Home;
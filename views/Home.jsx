var React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");
const moment = require("moment");

class Home extends React.Component {
    render() {
        // console.log("HOME EXPENSE:", this.props.expense);
        // console.log("HOME INCOME:", this.props.income);

        const expenseElement = this.props.expense.map(expense =>{
            var urlExpense = "/expense/" + expense.id;
            return (
                <ul key={expense.id}>
                    <a href= {urlExpense} style={{color: "black"}}>
                    <li key={expense.id} style={{ listStyleType: "none" }}><b>Expense: </b>${expense.expense}</li>
                    <li key={expense.id} style={{ listStyleType: "none" }}><b>Date: </b>{moment(expense.date).format("MMM Do YYYY")}</li>
                    <li key={expense.id} style={{ listStyleType: "none" }}><b>Category: </b>{expense.category}</li>
                    </a>
                </ul>
            );
        });
        const incomeElement = this.props.income.map(income => {
            var urlIncome = "/income/" + income.id;

            return (
                <ul key={income.id}>
                    <a href={urlIncome} style={{color: "black"}}>
                    <li key={income.id} style={{ listStyleType: "none" }}><b>Income: </b>${income.income}</li>
                    <li key={income.id} style={{ listStyleType: "none" }}><b>Date: </b>{moment(income.date).format("MMM Do YYYY")}</li>
                    <li key={income.id} style={{ listStyleType: "none" }}><b>Category: </b>{income.category}</li>
                    </a>
                </ul>
            );
        });
        return (
            <DefaultLayout>
                <div className = "row">
                    <div className = "col-sm-4">
                        <br/>
                        <a href="/expense/new" role="button" className="btn btn-primary">Enter Expense</a>
                        <br />
                        <br/>
                        <a href="/income/new" role="button" className="btn btn-primary">Enter Income</a>
                    </div>
                    <div className = "col-sm-4">
                    <br/>
                        <h4>Expense</h4>
                        {expenseElement}
                    </div>
                    <div className="col-sm-4">
                        <br />
                        <h4>Income</h4>
                        {incomeElement}
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Home;
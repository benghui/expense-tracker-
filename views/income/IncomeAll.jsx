var React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");
const moment = require("moment");

class IncomeAll extends React.Component {
    render() {

        const incomeElement = this.props.income.map(income => {
            var urlincome = "/income/" + income.id;
            return (
                <ul key={income.id}>
                    <a href={urlincome}>
                        <li key={income.id}><b>Income: </b>${income.income}</li>
                        <li key={income.id}><b>Date: </b>{moment(income.date).format("MMM Do YYYY")}</li>
                        <li key={income.id}><b>Category: </b>{income.category}</li>
                    </a>
                </ul>
            );
        });

        return (
            <DefaultLayout>
                <div className="row">
                    <div className="col-sm-4">
                        <br />
                        <a href='/income'><h4>Income</h4></a>
                        {incomeElement}
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = IncomeAll;
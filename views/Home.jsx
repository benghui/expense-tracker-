var React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class Home extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <br/>
                <a href="/expense/new" role="button" className="btn btn-primary">Enter Expense</a>
                <br />
                <br/>
                <a href="/income/new" role="button" className="btn btn-primary">Enter Income</a>
            </DefaultLayout>
        )
    }
}

module.exports = Home;
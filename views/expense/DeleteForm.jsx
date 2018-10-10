const React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");

class DeleteForm extends React.Component {
    render() {
        console.log("INSIDE REACT INDEX", this.props.expense);

        return (
            <DefaultLayout>
                <h3>Delete Expense</h3>
                <form method="POST" action={`/expense/${this.props.expense.id}?_method=DELETE`}>
                    <p>Confirm delete?</p>
                    <input type="submit" />
                </form>
            </DefaultLayout>        
        );
    }
}

module.exports = DeleteForm;
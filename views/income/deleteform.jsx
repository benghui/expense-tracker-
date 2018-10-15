const React = require("react");
const DefaultLayout = require("../layout/defaultlayout");

class DeleteForm extends React.Component {
    render() {
        console.log("INSIDE REACT INDEX", this.props.income);

        return (
            <DefaultLayout>
                <h3>Delete income</h3>
                <form method="POST" action={`/income/${this.props.income.id}?_method=DELETE`}>
                    <p>Confirm delete?</p>
                    <input type ="submit" />
                </form>
            </DefaultLayout>        
        );
    }
}

module.exports = DeleteForm;
const React = require('react');
const moment = require("moment");
const DefaultLayout = require("../layout/DefaultLayout");

class EditIncomeForm extends React.Component {
    render() {
        const cancelUrl = `/income/${this.props.income.id}`;
        const updateUrl = `/income/${this.props.income.id}?_method=PUT`;

        return (
            <DefaultLayout>
                <br />
                <form action={updateUrl} method="POST">
                    <div>
                        <input name="income" type="number" step="0.01" defaultValue={this.props.income.income} required />
                    </div>
                    <div>
                        <input name="date" type="date" defaultValue={moment(this.props.income.date).format("MMM Do YYYY")} />
                    </div>
                    <div>
                        <input name="category" type="text" defaultValue={this.props.income.category} placeholder="Category" />
                    </div>
                    <div>
                        <a className="btn btn-secondary mr-2" role="button" href={cancelUrl}>
                            Cancel
            </a>
                        <input className="btn btn-primary my-3" type="submit" value="Update" />
                    </div>
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = EditIncomeForm;
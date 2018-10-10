const React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");
const moment = require("moment");

class GetFromId extends React.Component {
  render() {
    //   console.log("inside react", this.props.expense);
      var urlEdit = this.props.expense[0].id + "/edit"; 
      var urlDelete = this.props.expense[0].id + "/delete"; 

    const expenseElement = this.props.expense.map((expense) => {

        return (
        <ul key={expense.id}>
            <li key={expense.id} style={{ listStyleType: "none" }}><b>Expense: </b>${expense.expense}</li>
            <li key={expense.id} style={{ listStyleType: "none" }}><b>Date: </b>{moment(expense.date).format("MMM Do YYYY")}</li>
            <li key={expense.id} style={{ listStyleType: "none" }}><b>Category: </b>{expense.category}</li>
        </ul>
        );
    });
    return <DefaultLayout>
        <br />
        <div>
          {expenseElement}
          <ul>
          <a role="button" className="btn btn-primary" href={urlEdit}>
            Edit
          </a> <a role="button" className="btn btn-primary" href={urlDelete}>
            Delete
          </a>
            </ul>
        </div>
      </DefaultLayout>;
  }
}

module.exports = GetFromId;

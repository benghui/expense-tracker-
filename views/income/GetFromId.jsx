const React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");
const moment = require("moment");

class GetFromId extends React.Component {
  render() {
    //   console.log("inside react", this.props.income);
      var urlEdit = this.props.income[0].id + "/edit"; 
      var urlDelete = this.props.income[0].id + "/delete"; 

    const incomeElement = this.props.income.map((income) => {

        return (
        <ul key={income.id}>
            <li key={income.id} style={{ listStyleType: "none" }}><b>income: </b>${income.income}</li>
            <li key={income.id} style={{ listStyleType: "none" }}><b>Date: </b>{moment(income.date).format("MMM Do YYYY")}</li>
            <li key={income.id} style={{ listStyleType: "none" }}><b>Category: </b>{income.category}</li>
        </ul>
        );
    });
    return <DefaultLayout>
        <br />
        <div>
          {incomeElement}
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

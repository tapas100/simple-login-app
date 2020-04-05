import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { usersActions, authActions } from "../../actions";
import { withRouter } from 'react-router'
import CardOne from "../../components/CardOne/CardOne";
import WhiteHeader from "../../components/WhiteHeader/WhiteHeader";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUsers();
  }

  signOut = () =>{
    this.props.signOut().then(res=>{
       this.props.history.push('/signin');
    })
  }


  render() {
    const { usersList } = this.props;
    console.log("users props", this.props);
    const columns = [
      {
        dataField: "id",
        text: "Employee ID"
      },
      {
        dataField: "name",
        text: "Name"
      },
      {
        dataField: "email",
        text: "Email"
      },
      {
        dataField: "phoneNo",
        text: "Phone"
      },
      {
        dataField: "gender",
        text: "Gender"
      },
      {
        dataField: "age",
        text: "Age"
      }
    ];
    return (
      <Fragment>
        <div className="container-fluid">
          <WhiteHeader
            label={
              <div className="d-flex justify-content-between">
                <h5>EMPLOYEES</h5>
                <div className="mr-3">
                  <span
                    className="ss-text-medium ss-text-weight-400 ss-text-primary ss-cursor-pointer"
                    onClick={this.signOut}
                  >
                    SIGN OUT
                  </span>
                </div>
              </div>
            }
          />
          {usersList.length > 0 && (
            <CardOne className="p-0" containerClassName="mt-3">
              <BootstrapTable
                keyField="id"
                data={usersList}
                columns={columns}
              />
            </CardOne>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ ...state.usersState });

const mapDispatchToProps = dispatch => ({
  getUsers: (username, password) =>
    dispatch(usersActions.getUsers(username, password)),
  signOut: () => dispatch(authActions.signOut())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));

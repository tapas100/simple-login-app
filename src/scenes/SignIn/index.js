import React, { Component, Fragment } from "react";
import SigninForm from "./SignInForm";
import { connect } from "react-redux";
import { authActions } from "../../actions";
import WhiteHeader from "../../components/WhiteHeader/WhiteHeader";
import CardOne from "../../components/CardOne/CardOne";
import { withRouter } from "react-router";


import "./SignIn.scss";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  handleSubmit = async values => {
    ;
    const { email, password } = values;
    this.props.signIn(email, password).then((res)=>{
        localStorage.setItem('token',res.token)
        this.props.history.push('/users')
    });
  };


  render() {
    const {
      loginProcess,
      loginSuccess,
      loginFailure,
      serverError,
      isLoading,
      isLoggedIn
    } = this.props;
    return (

      <Fragment>
        <div className="base_frame container-fluid">
          {(!loginSuccess || loginFailure || loginProcess) && (
            <div className="container">
              <div className="row mt-5 justify-content-center">
                <div className="col-md-12">
                  <CardOne con className={"Signin-Card p-0"}>
                    <WhiteHeader
                      label={
                        <div className="d-flex justify-content-between">
                          <h5>LOGIN</h5>
                        </div>
                      }
                    ></WhiteHeader>
                    <div className="line"></div>
                    <SigninForm
                      handleSubmit={this.handleSubmit}
                      isLoading={isLoading}
                      forgotPassword={this.forgotPassword}
                    />
                    {serverError && (
                      <div
                        className="text-danger mt-2 mb-2"
                        style={{ marginLeft: "60px" }}
                      >
                        {serverError}
                      </div>
                    )}
                  </CardOne>
                </div>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ ...state.authState });

const mapDispatchToProps = dispatch => ({
  signIn: (username, password) => dispatch(authActions.signIn(username, password)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin));

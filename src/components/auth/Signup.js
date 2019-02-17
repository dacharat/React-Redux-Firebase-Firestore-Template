import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
          <div>
            <label>E-mail</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div>
            <label>Firstname</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div>
            <label>Lastname</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div>
            <button>Sign up</button>
          </div>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.firebase.auth, authError: state.auth.authError };
};
const mapDispatchToProps = dispatch => {
  return { signUp: newUser => dispatch(signUp(newUser)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

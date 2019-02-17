import React from "react";
import { connect } from "react-redux";

const Stateless = () => {
  return (
    <div>
      <h1>Stateless</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return { propsName: "" };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stateless);

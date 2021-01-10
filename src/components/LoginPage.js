import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";


export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box_layout__box">
      <h1 className="box-layout__title">Flights</h1>
      <p>Flights App</p>
      <button className="button" onClick={startLogin}>
        Login With Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

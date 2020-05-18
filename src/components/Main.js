import AuthContext from "../context/auth-context";
import React, { Component } from "react";

class Main extends Component {
  state = {};
  render() {
    return (
      <AuthContext.Consumer>
        {(value) => (
          <>
            <h1>----{JSON.stringify(value)}</h1>
            {value.authenticated ? (
              <button onClick={value.logout}>Logout</button>
            ) : (
              <button onClick={value.login}>Login</button>
            )}
          </>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Main;

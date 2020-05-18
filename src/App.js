import AuthContext from "./context/auth-context";
import React, { Component } from "react";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      authenticated: false,
    };
  }
  componentDidMount() {
    // get and set currently logged in user to state
  }
  loginHandler = () => {
    setTimeout(() => {
      this.setState({
        authenticated: true,
        user: {
          name: "pooja",
        },
      });
    }, 2000);
  };
  logoutHandler = () => {
    this.setState({
      authenticated: false,
      user: {},
    });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          authenticated: this.state.authenticated,
          login: this.loginHandler,
          logout: this.logoutHandler,
        }}
      >
        <Main />
      </AuthContext.Provider>
    );
  }
}

export default App;

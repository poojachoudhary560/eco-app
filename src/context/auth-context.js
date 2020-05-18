import React from "react";

const AuthContext = React.createContext({
  authenticated: false,
  user: {},
  login: () => {},
});

export default AuthContext;

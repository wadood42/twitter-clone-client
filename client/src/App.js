import React, { useContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
function App() {
  const authContext = useContext(AuthContext);

  const { user } = authContext;
  return (
    <Router>
      <div className='App'>
        <Route
          exact
          path='/'
          render={(props) =>
            user ? <Home {...props} /> : <Signup {...props} />
          }
        />
        <Route
          path='/login'
          render={(props) =>
            user ? <Home {...props} /> : <Login {...props} />
          }
        />
      </div>
    </Router>
  );
}

export default App;

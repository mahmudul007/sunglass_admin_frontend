import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import User from "./Component/Users/User";
import Singleuser from "./Component/Singleuser/Singleuser";
import Form from "./Component/Form/Form";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/Login/PrivateRoute";
import AddProduct from "./Component/Product/AddProduct";
import List from "./Component/Transaction/List";
import { Productlist } from "./Component/Product/Productlist/Productlist";
import Register from "./Component/Register/Register";

function App() {
  var user = null;
  var token = null;
  if (localStorage.getItem("user")) {
    var obj = JSON.parse(localStorage.getItem("user"));
    token = obj.access_token;
    if (obj.isAdmin == true) {
      user = true;
    } else {
      user = false;
    }
  }

  var hours = 8; // to clear the localStorage after 1 hour
  var now = new Date().getTime();
  var setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>

        <Route path="/users">
          <User></User>
        </Route>
        <Route path="/user">
          <Singleuser />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/datalog">
          <Productlist />
        </Route>

        <Route path="/add">
          <AddProduct />
        </Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

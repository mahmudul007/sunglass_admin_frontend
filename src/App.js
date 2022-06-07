import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from './Component/Users/User';
import Singleuser from './Component/Singleuser/Singleuser';
import Form from './Component/Form/Form';

function App() {
  return (

    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/users'>
          <User></User>
        </Route>
        <Route path="/user" >
          <Singleuser />

        </Route>
        <Route path="/form">
          <Form />

        </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;

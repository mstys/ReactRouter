import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { Header } from './Components/Header/Header';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { Products } from './Components/Products/Products';
import { ProductsDetails } from './Components/ProductsDetails/ProductsDetails';
import { Person } from './Components/Person/Person';
import { Login } from './Components/Login/Login';
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute';
import './index.css';
import './App.css'


const BasicExample = () => (
  <Router>
    <div className="App">
      <Header />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/react">React</Link></li>
        <li><Link to="/redux">Redux</Link></li>
        <li><Link to="/protectedRoute">Protected Route</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
        <Route path="/protectedRoute" render={props => (<ProtectedRoute protected={true} />)} />
        <Route path="/:name" component={Person} />
        <Route path="/products/:id" component={ProductsDetails} />
      </Switch>
    </div>
  </Router>
)




ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
);

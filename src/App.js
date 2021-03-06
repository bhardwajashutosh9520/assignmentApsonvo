import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductList from './productList/index';

class App extends PureComponent {
 render() {
  const { myname, changeName } = this.props;
  return (
   <div className="app">
    <Router>
     <div>
      <Switch>
       <Route path="/">
        <ProductList />
       </Route>
      </Switch>
     </div>
    </Router>
   </div>
  );
 }
}

export default App;

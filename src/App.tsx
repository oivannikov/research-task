import React from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { TodosPage } from './pages/TodosPage/TodosPage';

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage/AboutPage';

const App: React.FC = () => {
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="/todos"/>
          </Route> */}
          
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
          {/* <Redirect to="/"/> */}
        </Switch>
      </div>
    </>
  );
}

export default App;

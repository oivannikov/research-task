import React from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { TodosPage } from './pages/TodosPage/TodosPage';

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage/AboutPage';

console.log(process.env.PUBLIC_URL);

const App: React.FC = () => {
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="/todos"/>
          </Route> */}
          
          <Route component={TodosPage} path={`${process.env.PUBLIC_URL}/`} exact />
          <Route component={AboutPage} path={`${process.env.PUBLIC_URL}/about`} />
          <Redirect to={`${process.env.PUBLIC_URL}/`} />
        </Switch>
      </div>
    </>
  );
}

export default App;

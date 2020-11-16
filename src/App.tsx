import React from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { TodosPage } from './pages/TodosPage/TodosPage';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage/AboutPage';

const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

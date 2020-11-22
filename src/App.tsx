import React, { useEffect, useState } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { BookList } from './components/BookList/BookList';
import { CurrentBook } from './components/CurrentBook/CurrentBook';

import { IBook } from './interfaces';

import { getBooks } from './api//books';

import './App.scss';

const App: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    getBooks()
      .then(books => setBooks(books));
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/books/" />
        </Route>

        <Route
          path="/books/"
          component={() => <BookList books={books} /> }
          exact
        />

        <Route path="/books/:bookId" component={CurrentBook} />
      </Switch>
    </div>
  );
}

export default App;

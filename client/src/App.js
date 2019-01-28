import React, { Component } from 'react';

//Import Apollo modules
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AuthorList from './components/AuthorList';

// Components


//Apollo Client Setup
var root = "http://localhost:4000/graphql"
const client = new ApolloClient({uri: root})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <div className="left">
          <h2>All Books</h2>
          <BookList />
          <AddBook />
        </div>
        <div className="right">
          <h2>All Authors</h2>
          <AuthorList />
        </div>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
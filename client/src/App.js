import React, { Component } from 'react';

//Import Apollo modules
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// Components


//Apollo Client Setup
var root = "http://localhost:4000/graphql"
const client = new ApolloClient({uri: root})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <h1></h1>
        <BookList />
        <AddBook />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
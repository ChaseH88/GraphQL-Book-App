import React, { Component } from 'react';

//Import Apollo modules
import ApolloClient from 'apollo-boost';
import ApolloProvider from 'react-apollo';

// Components
import BookList from "./components/BookList"; // <BookList />

//Apollo Client Setup
var root = "https://chaseharrison-chaseh88.c9users.io/graphql"
const client = new ApolloClient({
  uri: root
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <h1>Book List</h1>
        <BookList />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;

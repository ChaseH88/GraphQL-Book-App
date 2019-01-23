import React, { Component } from 'react';
import queries from '../query/main.js';
import { graphql } from 'react-apollo';

class BookList extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="list">
        <ul>
            <li>test</li>
        </ul>
      </div>
    )
  }
}

export default graphql(queries.getBooksQuery)(BookList);
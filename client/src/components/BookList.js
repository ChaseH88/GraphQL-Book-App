import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';

// Query
const getBooksQuery = gql`
  {
    books {
      name{
      genre
        author{
          name
        }
      }
    }
  }
`

class BookList extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="list">
        <ul>
            <li>test</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
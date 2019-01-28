import React, { Component } from 'react';
import { graphql } from 'react-apollo'

import { getBookQuery } from '../query/main';

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by {book.author.name}:</p>
          <ul className="otherBooks">
            {book.author.books.map((book) => {
              return <li key={book.id}>{book.name}</li>
            })}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          No book selected...
        </div>
      )
    }
  };

  render() {
    return (
      <div id="bookDetails">
        {this.displayBookDetails()}
      </div>
    );
  }
}

// Allows query to rerun if props are changed
export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);
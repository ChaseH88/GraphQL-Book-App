import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// Queries
import {getBooksQuery} from '../query/main.js';

// Components
import BookDetails from './BookDetails.js';

class BookList extends Component {
  state = {
    selected: null
  }
  displayBooks(){
    var data = this.props.data;
    if(data.loading){
      return( <div>Loading Books...</div> );
    } else {
      return data.books.map(book => {
        return(
          <li key={book.id}><a href="#" onClick={(e) => {this.setState({selected: book.id})}} key={book.id}>
            {book.name}
          </a></li>
        );
      })
    }
  }
  render() {
    return (
      <div id="list">
        <ul>
            {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
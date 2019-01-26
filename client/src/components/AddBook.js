import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// Queries
import {getAuthorsQuery} from '../query/main.js';


class AddBook extends Component {
    state = {
        name: "",
        genre: "",
        authorId: ""
    }
    displayAuthors(){
        var data = this.props.data
        if(data.loading){
            return(<option disabled checked>Loading Authors...</option>)
        } else {
            return data.authors.map(author => {
                return(<option key={author.id}>{author.name}</option>)
            })
        }
    }
    changeBook = (e) => {
        this.setState({
          name: e.target.value
        })
      }
    changeGenre = (e) => {
        this.setState({
          genre: e.target.value
        })
      }
    changeAuthor = (e) => {
        this.setState({
          authorId: e.target.value
        })
    }
    addBook = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        console.log(this.props)
        return(
            <form id="addBook" onSubmit={this.addBook.bind(this)}>
                <div className="field">
                    <label>Book Name:</label>
                    <input onChange={this.changeBook} type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input onChange={this.changeGenre} type="text" />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={this.changeAuthor}>
                        {this.displayAuthors()}
                    </select>
                </div>
                <div className="controls">
                    <button>Add Book</button>
                </div>
            </form>
        )
    }
}

export default graphql(getAuthorsQuery)(AddBook)
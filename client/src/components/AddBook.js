import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

// Queries
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../query/main.js';


class AddBook extends Component {
    state = {
        name: "",
        genre: "",
        authorId: ""
    }
    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        if(data.loading){
            return(<option disabled checked>Loading Authors...</option>)
        } else {
            return data.authors.map(author => {
                return(<option key={author.id}>{author.name}</option>)
            })
        }
    }
    addBook = (e) => {
        e.preventDefault();
        console.log(this.state);
        // call the query
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{
                query: getBooksQuery
            }]
        })
    }
    render(){
        console.log(this.props)
        return(
            <form id="addBook" onSubmit={this.submitForm}>
                <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={e => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={e => this.setState({ genre: e.target.value })} />
                </div>
                <div className="field">
                <label>Author:</label>
                <select onChange={e => this.setState({ authorId: e.target.value })}>
                    <option>Select author</option>
                    {this.displayAuthors()}
                </select>
                </div>
        <button>+</button>
      </form>
        )
    }
}

//For attaching multiple queries
//Will return an object with the name of the query
//--you gave it below and NOT the object named Data
export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);


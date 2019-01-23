import React, { Component } from 'react';
import {getAuthorsQuery} from '../query/main.js';
import { graphql } from 'react-apollo';


class AddBook extends Component {
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
    render(){
        console.log(this.props)
        return(
            <form id="addBook">
                <div className="field">
                    <label>Book Name:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
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
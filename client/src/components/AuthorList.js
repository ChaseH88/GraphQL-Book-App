import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

// Queries
import {getAuthorsQuery} from '../query/main.js';


class AuthorList extends Component {
    displayAuthors(){
        var data = this.props.data;
        if(data.loading){
            return(<span>Loading Authors...</span>)
        } else {
            return data.authors.map(author => {
                return(
                    <li key={author.id}>
                        <p>{author.name}</p>
                        <p><em>-Age: {author.age}</em></p>
                    </li>
                )
            })
        }
    }
    render(){
        return(
            <ul>
                {this.displayAuthors()}
            </ul>
        )
    }
}

export default graphql(getAuthorsQuery)(AuthorList);


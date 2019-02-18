import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

// Functional Component
const Launches = () => {
    return (
    // Attaches the query to the props
      <Query query={getAuthorsQuery}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <p>ERROR</p>;
          return (
            <React.Fragment>
              {data.authors.map(author => (
                  <li>{author.name}</li>
            ))}
            </React.Fragment>
          );
        }}
      </Query>
    );
  };

  export default Launches;
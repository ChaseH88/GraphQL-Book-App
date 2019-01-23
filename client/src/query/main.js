import { gql } from 'apollo-boost';

// Get all Books
export const getBooksQuery = gql`
    {
      books{
        name
        id
      }
    }
  `;

  // Get all Authors
  export const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
  `
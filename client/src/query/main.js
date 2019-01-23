import { gql } from 'apollo-boost';


export const getBooksQuery = gql`
    {
      books{
        id
        author{
          name
        }
      }
    }
  `;
import { gql } from 'apollo-boost';

//Booklist Component
export const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

// AddBook Component
export const getAuthorsQuery = gql`
  {
    authors {
      name
      id
      age
    }
  }
`
export const addBookMutation = gql`
# Declare you're making a mutation with query variables
  mutation($name: String!, $genre: String!, $authorId: ID!) {
# Now pass these vriables to the addBook query  
    addBook(name: $name, genre: $genre, authorId: $authorId) {
# When complete, give back the name and the id
      name
      id
    }
  }
`

export const getBookQuery = gql`
# Declare your query variables
  query($id: ID) {
# Pass to the book query to find
    book(id: $id){
# Once found, return all of the details below
      name
      id
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`
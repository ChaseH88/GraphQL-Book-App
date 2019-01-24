// GRAPHQL - YOUTUBE SERIES
// https://www.youtube.com/watch?v=NWod5SFW13s&index=9&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f
const graphql = require("graphql");
const _ = require("lodash");
const Book = require("../models/book");
const Author = require("../models/author");



//deconstructs the variables from graphql
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql


//declare a new type-------------------
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
         id: {type: GraphQLID},
         name: {type: GraphQLString},
         genre: {type: GraphQLString}, 
         author: {
             type: AuthorType,
             resolve(parent, args){
                // console.log(parent);
                // console.log(args);
                return Author.findById(parent.authorId);
             }
         }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({authorId: parent.id});
            }
        }
    })
});
//------------------------------------


// Root Query
// args will allow the id to be passed into the query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // book query
        book: {
            type: BookType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                // console.log(parent);
                // console.log(args);
                //Code will get database matches
                return Book.findById(args.id);
            }
        },
        // author query
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // console.log(parent);
                // console.log(args);
                return Author.findById(args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({});
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return Author.find({});
            }
        }
    }
})

// Allows GraphQL to change correct data
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // Adds an author to the database
        addAuthor: {
            type: AuthorType,
            // What is being added
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            // when the data is gathered
            resolve(parent, args){
                // Grabs the schema to create author
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                // Save to the database
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                authorId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save();
            }
        },
        addAuthor: {
            type: AuthorType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args){
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save();
            }
        }
    }
})

// Calls the default query
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})




/*
======================================================================================


const AccountType = new GraphQLObjectType({
    name: "Account",
    fields: () => ({
         id: {type: GraphQLString},
         acctNum: {type: GraphQLString}
    })
})

const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
         id: {type: GraphQLString},
         productNum: {type: GraphQLString},
         acctNum: {
             type: AccountType,
             resolve(parent, args){
                // console.log(parent);
                // console.log(args);
                return _.find(authors, {id: parent.authorId});
             }
         },
         email: [USERTYPE],
    })
})

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
         id: {type: GraphQLString},
         email: {type: GraphQLString},
         password: {type: GraphQLString},
    })
})


======================================================================================
*/
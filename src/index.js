import { ApolloServer, gql } from 'apollo-server'; // We import Apollo Server and the gql function to define our GraphQL schema

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }
    type User {
      id: ID!
      name: String!
      age: Int!
    }
  `, // We define our GraphQL schema using the gql function. In this case, we have a simple Query type with a single field 'hello' that returns a String.
  resolvers: {
    Query: {
      user: () => ({
        id: '1',
        name: 'John Doe',
        age: 30,
      }),
      users: () => [
        { id: '1', name: 'John Doe', age: 30 },
        { id: '2', name: 'Jane Smith', age: 25 },
      ],
      // We define the resolver for the 'hello' field. It simply returns the string 'Hello world!'.
      // We define the resolver for the 'hi' field. It returns the string 'Hi there!'.
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});

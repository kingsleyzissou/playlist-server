import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';

export default new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  formatError: (error) => {
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');
    return {
      ...error,
      message,
    };
  },
});

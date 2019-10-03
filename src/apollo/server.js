import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';

const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers,
    formatError: error => {
        // remove the internal sequelize error message
        // leave only the important validation error
        const message = error.message
            .replace('SequelizeValidationError: ', '')
            .replace('Validation error: ', '');

        return {
            ...error,
            message,
        };
    }
});

export default server;
import { GraphQLSchema, addGraphQLSchema, addGraphQLResolvers, addGraphQLQuery } from 'meteor/vulcan:core';

/*

SchemaContents resolver

Used to output the GraphQL schema as a string

*/
const schemaResolvers = {
  Query: {
    SchemaContents(root, args, context) {
      return GraphQLSchema.finalSchema[0];
    },
  },
};
addGraphQLResolvers(schemaResolvers);

addGraphQLQuery(`SchemaContents: String`);

/*

MoppedsCount resolver

Used to display the total number of documents in the Moppeds collection

*/
import Moppeds from '../modules/collection.js';

const MoppedsCountResolvers = {
  Query: {
    MoppedsCount(root, args, context) {
      return Moppeds && Moppeds.find().count();
    },
  },
};
addGraphQLResolvers(MoppedsCountResolvers);

addGraphQLQuery(`MoppedsCount: Int`);

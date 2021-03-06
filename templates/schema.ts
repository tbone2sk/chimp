// if someone wants to use this generator without federation that's completely fine and we don't want this file to cause a typescript error.

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { buildFederatedSchema } from "@apollo/federation";
import { resolvers } from "{{generatedPrefix}}/graphql/resolvers";
import gql from 'graphql-tag'

const typeDefs = gql`{{schemaString}}`

const schema = buildFederatedSchema([
  {
    typeDefs,
    resolvers,
  },
]);

export { schema };

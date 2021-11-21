import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer, gql } from "apollo-server";
import neo4j from "neo4j-driver";

const typeDefs = gql`
  type Biography {
    id: String!
    data: String!
  }
  type Biographies {
    entries: [Biography]!
  }
`;

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "password")
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
const server = new ApolloServer({
  schema: neoSchema.schema,
});

server.listen().then(({ url }) => {
  console.log(`Listening on ${url}`);
});

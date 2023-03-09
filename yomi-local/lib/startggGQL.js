import { GraphQLClient } from "graphql-request";
export function request({ query, variables, includeDrafts, excludeInvalid }) {
  const headers = {
    authorization: `Bearer 9e085a72b07f9ca0774d838957b1c21c`,
  };
  
  const client = new GraphQLClient('https://api.start.gg/gql/alpha', { headers });
  return client.request(query, variables);
}
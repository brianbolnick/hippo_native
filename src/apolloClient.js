import { ApolloClient } from "apollo-client";
import { from } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { createLink } from "apollo-absinthe-upload-link";
import { getDataFromAs, GRAPHQL_HOST } from "utils";

const httpLink = createHttpLink({
  uri: GRAPHQL_HOST
});

const uploadLink = createLink({
  uri: GRAPHQL_HOST
});

const authLink = setContext(async (_, { headers }) => {
  const { authToken } = await getDataFromAs();
  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : ""
    }
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: from([errorLink, authLink, uploadLink, httpLink]),
  cache: new InMemoryCache()
});

export default client;

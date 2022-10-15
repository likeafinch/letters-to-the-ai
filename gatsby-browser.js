import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { RecoilRoot } from 'recoil';
const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization:
          'Basic Zm5BRXFQX1FuOEFDVXIzeWFSNlpjdmx5UjRFQnVqTW5aQ3FFRjRiSDpBSUxldHRlcnM6YWRtaW4=',
      },
    });
  },
});

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>
    <ApolloProvider client={client}>{element}</ApolloProvider>;
  </RecoilRoot>
);

import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const beatStarsApolloClient = new ApolloClient({
  uri: 'https://core.prod.beatstars.net/graphql1',
  cache: new InMemoryCache(),
});


export { beatStarsApolloClient };

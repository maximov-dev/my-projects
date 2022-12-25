import { DocumentNode, gql } from '@apollo/client';

export const GET_TRENDING_SEARCHES_QUERY = `
  query trendingSearches($size: Int!) {
    trendingSearches(size: $size) {
      count
      objectID
      popularity
      query
    }
  }
`;

export const getQueryFromString = (...values: string[]): DocumentNode => {
  const stringValue = values.reduce((acc, item) => {
    return acc.concat('\n' + item)
  }, '');

  return gql(stringValue);
}



import {ApolloClient, DocumentNode, NormalizedCacheObject} from "@apollo/client";

export interface BeatstarsTrendingSearches {
  popularity: string;
  count: number;
  objectID: string;
}

export class BeatstarsApi {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {
  }

  async getData(query: DocumentNode, variables: Record<string, unknown> = {}): Promise<{
    trendingSearches: BeatstarsTrendingSearches | null, loading: boolean,
    error: Error | null,
  }> {
    const {data, loading, error} = await this.client.query({
      query,
      variables: {size: 100, ...variables},
    });

    return { trendingSearches: data.trendingSearches || null, loading: loading || false, error: error || null }
  }
}

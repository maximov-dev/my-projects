import {
   ApolloClient,
   DocumentNode,
   NormalizedCacheObject,
} from '@apollo/client';
import { BeatstarsTrendingSearches } from '../models/beatstars.models';
import { keysToCamel, toAppError } from '@my-projects/shared/util-serializers';
import { ApolloError } from '@apollo/client/errors';
import { AppError } from '../../../../../shared/util-serializers/src/lib/models/app-error.models';

export class BeatstarsApi {
   constructor(private client: ApolloClient<NormalizedCacheObject>) {}

   async getData(
      query: DocumentNode,
      variables: Record<string, unknown> = {}
   ): Promise<{
      trendingSearches: BeatstarsTrendingSearches | null;
      loading: boolean;
      error: AppError | null;
   }> {
      try {
        const { data, loading, error } = await this.client.query({
          query,
          variables: { size: 100, ...variables },
        });
        const graphQlError = keysToCamel(error) as ApolloError;

        return {
          trendingSearches: data.trendingSearches || null,
          loading: loading || false,
          error: graphQlError ? toAppError(graphQlError.name, graphQlError.message, graphQlError) : null,
        };
      } catch (error) {
        const unexpectedError = keysToCamel(error) as Error;

        return {
          trendingSearches: null,
          loading: false,
          error: toAppError(unexpectedError.name, unexpectedError.message, unexpectedError),
        };
      }
   }
}

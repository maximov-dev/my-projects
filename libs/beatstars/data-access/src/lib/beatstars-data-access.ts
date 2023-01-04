import { BeatstarsApi } from './api/beatstars.api';
import { getQueryFromString, GET_TRENDING_SEARCHES_QUERY } from './query/trending-searches';
import { BeatstarsTrendingSearches } from './models/beatstars.models';

export type { BeatstarsTrendingSearches };
export { BeatstarsApi, getQueryFromString, GET_TRENDING_SEARCHES_QUERY };

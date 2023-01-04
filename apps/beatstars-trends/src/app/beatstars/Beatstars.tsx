import React, { useEffect, useState } from 'react';
import {
   BeatstarsApi,
   BeatstarsTrendingSearches,
   GET_TRENDING_SEARCHES_QUERY,
   getQueryFromString,
} from '@my-projects/beatstars/data-access';
import { AppError } from '@my-projects/shared/util-serializers';
import { GridWrapper } from '../shared/components/grid-wrapper/GridWrapper';
import { Spinner } from '../shared/components/spinner/Spinner';
import { beatStarsApolloClient } from './components/beatstars-graphql-provider/beatstars-graphql.provider';

export interface BeatStarsGraphQlData {
   trendingSearches: BeatstarsTrendingSearches[];
   loading: boolean;
   error?: AppError;
}

export interface BeatstarsTrendingSearchesTableData {
   tagName: string;
   resultsCount: number;
   usersRequests: string;
}

const Beatstars = () => {
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<boolean>(false);
   const [trendingSearches, setTrendingSearches] = useState<
      BeatstarsTrendingSearchesTableData[]
   >([]);

   useEffect(() => {
      const beatstarsApi = new BeatstarsApi(beatStarsApolloClient);

      beatstarsApi
         .getData(getQueryFromString(GET_TRENDING_SEARCHES_QUERY))
         .then((data) => {
            const trendingSearchesDry = data.trendingSearches;

            if (trendingSearchesDry) {
               const mappedData =
                  mapTrendingDataResponseToTableData(trendingSearchesDry);

               setTrendingSearches(mappedData);
            }
         })
         .catch(() => {
            setError(true);
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);

   const mapTrendingDataResponseToTableData = (
      value: BeatstarsTrendingSearches[]
   ): BeatstarsTrendingSearchesTableData[] => {
      return value
         ? value.map((item: BeatstarsTrendingSearches) => {
              return {
                 tagName: item.objectID,
                 resultsCount: item.count,
                 usersRequests: item.popularity,
              };
           })
         : [];
   };
   const columns = ['tagName', 'resultsCount', 'usersRequests'];

   if (loading) {
      return <Spinner />;
   }

   if (error) {
      return (
         <section className="min-h-screen">
            <div className="flex justify-center m-3">
               <h1>Error</h1>
            </div>
         </section>
      );
   }

   return (
      <section className="min-h-screen">
         <GridWrapper
            columns={columns}
            gridTitle="Popular Tags"
            data={trendingSearches}
         />
      </section>
   );
};

export default Beatstars;

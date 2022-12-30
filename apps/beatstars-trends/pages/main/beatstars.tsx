import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { GridWrapper } from '../../app/src/components/shared/grid-wrapper/GridWrapper';
import { beatStarsApolloClient } from '../../app/src/components/beatstars/beatstars-graphql-provider/beatstars-graphql.provider';
import { Spinner } from '../../app/src/components/shared/spinner/Spinner';
import {
   BeatstarsApi,
   BeatstarsTrendingSearches,
   GET_TRENDING_SEARCHES_QUERY,
   getQueryFromString,
} from '@my-projects/beatstars/data-access';
import { AppError } from '@my-projects/shared/util-serializers';

export interface BeatStarsPageProps {
   trendingSearches: BeatstarsTrendingSearches[];
   loading: boolean;
   error?: AppError;
}

export interface BeatstarsTrendingSearchesTableData {
   tagName: string;
   resultsCount: number;
   usersRequests: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
   const beatstarsApi = new BeatstarsApi(beatStarsApolloClient);
   const data = await beatstarsApi.getData(
      getQueryFromString(GET_TRENDING_SEARCHES_QUERY)
   );

   return {
      props: { ...data },
   };
};

const Beatstars = ({
   loading,
   trendingSearches,
   error,
}: BeatStarsPageProps) => {
   const [beatStarsPopularTags, setBeatStarsPopularTags] = useState<
      BeatstarsTrendingSearchesTableData[]
   >([]);
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

   useEffect(() => {
      if (!loading) {
         const mappedData =
            mapTrendingDataResponseToTableData(trendingSearches);

         setBeatStarsPopularTags(mappedData);
      }
   }, [trendingSearches]);
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
            data={beatStarsPopularTags}
         />
      </section>
   );
};

export default Beatstars;

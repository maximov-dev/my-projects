import {
   IAirbitData,
   IAutoCompleteItem,
   ITopSellingItem,
} from '../models/airbit.model';
import { keysToCamel } from '@my-projects/shared/util-serializers';

class AirbitApi {
   private airbitBaseUrl = 'https://api.airbit.com';
   private tags = `${this.airbitBaseUrl}/tags/autocomplete`;
   private topSellingBeatsTags = `${this.airbitBaseUrl}/charts/marketplace_top_selling_beats?period=30&expand=user,tags,stats`;

   getPopularTags = async (
      query: string
   ): Promise<IAirbitData<IAutoCompleteItem>> => {
      return this.getResource(`${this.tags}?input=${query}&limit=100`).then(
         (value) => {
            return keysToCamel(value);
         }
      );
   };

   getTopSellingBeatsTags = async (): Promise<{
      item: IAirbitData<ITopSellingItem>;
   }> => {
      return this.getResource(this.topSellingBeatsTags).then((value) => {
         return keysToCamel(value);
      });
   };

   private getResource = async (url: string) => {
      try {
         const res = await fetch(url);

         return res.json();
      } catch (error) {
         console.error(error);
      }
   };
}

export { AirbitApi };

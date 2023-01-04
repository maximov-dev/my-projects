import React, { useEffect, useState } from 'react';
import { Spinner } from '../../shared/spinner/Spinner';
import { GridWrapper } from '../../shared/grid-wrapper/GridWrapper';
import { AirbitApi, IAirbitTag, ITopSellingItem } from '@my-projects/airbit/data-access';

interface TopSellingBeats { genre: string; tags: string; soldCount: number; plays: number; name: string; }
interface IAirbitTopSellingBeatTagsProps {
  airbitApi: AirbitApi
}

const AirbitTopSellingBeatTagsTable = ({ airbitApi }: IAirbitTopSellingBeatTagsProps) => {
  const [airbitTopSellingBeatsTags, setAirBitTopSellingBeatsTags] =
    useState<TopSellingBeats[]>([]);

  useEffect(() => {
    let isMounted = true;

    airbitApi.getTopSellingBeatsTags().then((value) => {
      if (isMounted) {
        const mappedData = value.item.items.map((item: ITopSellingItem) => {
          return {
            genre: item.data.genre,
            tags: item.tags
              .reduce((acc: string[], item: IAirbitTag) => [...acc, item.name], [])
              .join(','),
            soldCount: item.data.soldCount,
            plays: item.plays,
            name: item.name,
          };
        });

        setAirBitTopSellingBeatsTags(mappedData);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!airbitTopSellingBeatsTags) return <Spinner />;

  const columns = ['name', 'genre', 'tags', 'soldCount', 'plays'];

  return (
    <>
      <GridWrapper
        columns={columns}
        gridTitle="Top Selling Beat Tags"
        data={airbitTopSellingBeatsTags}
      />
    </>
  );
};

export { AirbitTopSellingBeatTagsTable };

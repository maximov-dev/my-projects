import React, { useEffect, useState } from 'react';
import { Spinner } from '../../shared/spinner/Spinner';
import { GridWrapper } from '../../shared/grid-wrapper/GridWrapper';
import {
  AirbitApi,
  IAutoCompleteItem,
  IAirbitData,
} from '@my-projects/airbit/data-access';
import { Input } from '@mui/material';
import { useDebounce } from '../../../utils/debounce.hook';

interface IAirbitMostPopularProps {
  airbitApi: AirbitApi;
}

const AirbitMostPopularTable = ({ airbitApi }: IAirbitMostPopularProps) => {
  const [query, setQuery] = useState('beat');
  const debouncedQuery = useDebounce(query, 1500);
  const [airbitPopularTags, setAirBitPopularTags] =
    useState<IAirbitData<IAutoCompleteItem> | null>(null);

  useEffect(() => {
    let isMounted = true;

    airbitApi
      .getPopularTags(query)
      .then((value: IAirbitData<IAutoCompleteItem>) => {
        if (isMounted) {
          setAirBitPopularTags(value);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [debouncedQuery]);

  if (!airbitPopularTags) return <Spinner />;

  const columns = ['id', 'name', 'beatsCount'];

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <GridWrapper
        columns={columns}
        gridTitle="Most Popular Tags"
        data={airbitPopularTags.items}
      >
        <Input
          onChange={changeHandler}
          className="w-full"
          placeholder="Type a beat tag to check beats count"
          defaultValue={debouncedQuery}
        />
      </GridWrapper>
    </>
  );
};

export { AirbitMostPopularTable };

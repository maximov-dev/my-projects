import { Container } from '@mui/material';
import React from 'react';
import { AirbitTopSellingBeatTagsTable } from '../../app/src/components/airbit/airbit-top-selling-beats-tags-table';
import { AirbitMostPopularTable } from '../../app/src/components/airbit/airbit-most-popular-table';
import { AirbitApi } from '@my-projects/airbit/data-access';

const Airbit = () => {
  const airbitApi = new AirbitApi();

  return (
    <div className="min-h-screen">
      <Container>
        <AirbitMostPopularTable airbitApi={airbitApi} />
        <AirbitTopSellingBeatTagsTable airbitApi={airbitApi} />
      </Container>
    </div>
  );
};

export default Airbit;

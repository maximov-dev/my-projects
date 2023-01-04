import { Container } from '@mui/material';
import React from 'react';
import { AirbitMostPopularTable } from './components/airbit-most-popular-table';
import { AirbitTopSellingBeatTagsTable } from './components/airbit-top-selling-beats-tags-table';
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

export { Airbit };

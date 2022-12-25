import React from 'react';
import Head from 'next/head';

interface MetaProps {
  title: string;
  description: string;
}

const Meta = ({ title, description }: MetaProps) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="description" content={description}/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
  );
};

export { Meta };

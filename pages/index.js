import Head from "next/head";
import React from 'react'
import fs from 'fs'

export default function Index({ title, description}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description} />
        <title>{title}</title>
      </Head>
      <div>
        <ul>
          
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const siteData = await import(`../config.json`);

  return {
    props: {
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}

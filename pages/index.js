import Head from "next/head";
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import marked from 'marked'

export default function Index({ title, description, content}) {
  const articles = content.map(doc => matter(doc.toString()))
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description} />
        <title>{title}</title>
      </Head>
          {articles.map((article,i ) => (
            <section key={i}>
              <h3>{article.data.title}</h3>
              <h4>{article.data.tagline}</h4>
              <div dangerouslySetInnerHTML={{__html: marked(article.content)}}>
              </div>
            </section>
          ))}
    </>
  );
}

export async function getStaticProps() {
  const siteData = await import(`../config.json`);
  const articlesList = fs.readdirSync('data')
  const content = articlesList.map(doc => fs.readFileSync('data/'+ doc).toString())
  return {
    
    props: {
      content,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}

import Head from "next/head";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import styles from "../styles/Home.module.css";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import Image from "next/image";

export default function Index({ title, description, content }) {
  const articles = content.map((doc) => matter(doc.toString()));
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description} />
        <title>{title}</title>
      </Head>
      <main className="main">
        <header>
          <h1 className={styles.title}>Online — Trening vida</h1>
        </header>
        <div className={styles.grid}>
          {articles.slice(0, 4).map((article, i) => (
            <section key={i} className={styles.card}>
              <div className={styles.image}>
                <Image
                  alt={article.data.alt}
                  src={article.data.image}
                  layout="fixed"
                  width={250}
                  height={250}
                />
              </div>
              <div>
                <h2>{article.data.title}</h2>
                <h4>{article.data.tagline}</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: marked(article.content) }}
                ></div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const siteData = await import(`../config.json`);
  const articlesList = fs.readdirSync("data");
  const content = articlesList.map((doc) =>
    fs.readFileSync("data/" + doc).toString()
  );
  return {
    props: {
      content,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}

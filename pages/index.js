import Head from "next/head";
import Link from "next/link";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Email } from "../components/icons/";

export default function Index({ title, description, content }) {
  const articles = content.map((doc) => matter(doc.toString()));
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary" key="twcard" />
        {/* <meta name="twitter:creator" content="@treningvida" key="twhandle" /> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta
          property="og:description"
          content="Metoda oporavka vida vežbama za oči postoji od 19.veka. Značajno unapređenje vežbi i načina rada se dogodilo sa Leom Angartom koji od 1996.godine &scaron;irom sveta održava Radionice za decu i odrasle.
Preko 1000 polaznika Treninga vida u na&scaron;oj zemlji su se već re&scaron;ili naočara bez operacije!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Metoda oporavka vida vežbama za oči"
        />
        <meta property="og:url" content="https://online.treningvida.com" />
        <meta
          property="og:image"
          content="https://online.treningvida.com/img/share_box.png"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="Description" content={description} />
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Online{" "}
          <Link href="/">
            <a>Trening vida!</a>
          </Link>
        </h1>
        <p className={styles.description}>Za decu i odrasle!</p>
        <div className={styles.drustvenemreze}>
          <span>Podeli: </span>
          <Link href="#">
            <a className={styles.fb}>
              <Facebook />
              <span>Facebook-u</span>
            </a>
          </Link>
          <Link href="#">
            <a className={styles.tw}>
              <Twitter />
              <span>Twitter-u</span>
            </a>
          </Link>
          <Link href="#">
            <a className={styles.in}>
              <Linkedin />
              <span>Linkedin-u</span>
            </a>
          </Link>
          <Link href="#">
            <a className={styles.mail}>
              <Email />
              <span>prijateljem</span>
            </a>
          </Link>
        </div>
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
                <h3>{article.data.tagline}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: marked(article.content) }}
                ></div>
              </div>
            </section>
          ))}
        </div>
        <div className={styles.grid}>
          {articles.slice(5, 6).map((article, i) => (
            <section key={i} className={styles.instructors}>
              <h2>{article.data.title}</h2>
              <h3>{article.data.tagline}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: marked(article.content) }}
              ></div>
              <div className={styles.isntructorcards}>
                {articles.slice(6, 8).map((article, i) => (
                  <div key={i} className={styles.inst}>
                    <div className={styles.image}>
                      <Image
                        alt={article.data.alt}
                        src={article.data.image}
                        layout="fixed"
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <h2>{article.data.title}</h2>
                      <h3>{article.data.tagline}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: marked(article.content),
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className={styles.drustvenemreze}>
          <span>Podeli: </span>
          <Link href="#">
            <a className={styles.fb}>
              <Facebook />
              <span>Facebook-u</span>
            </a>
          </Link>
          <Link href="#">
            <a className={styles.tw}>
              <Twitter />
              <span>Twitter-u</span>
            </a>
          </Link>
          <Link href="#">
            <a className={styles.in}>
              <Linkedin />
              <span>Linkedin-u</span>
            </a>
          </Link>
          <Link href="#">
            <a className={styles.mail}>
              <Email />
              <span>prijateljem</span>
            </a>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; treningvida.com 2021</p>
        <Link href="#">
          <a>
            <Facebook />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Twitter />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Linkedin />
          </a>
        </Link>
      </footer>
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

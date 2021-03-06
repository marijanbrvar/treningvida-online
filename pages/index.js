import Head from "next/head";
import Link from "next/link";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Facebook, Linkedin, Email } from "../components/icons/";
import FacebookPixel from '../components/Facebook-pixel'

export default function Index({ title, description, content, name }) {
  const articles = content.map((doc) => matter(doc.toString()));
  return (
    <div className={styles.container}>
      <Head>
        {name === 'FacebookPixel' && <FacebookPixel />}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary" key="twcard" />
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
        <meta name="Description" content={description} />
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <div><FacebookPixel name="FacebookPixel"/></div>
        <div className={styles.hero}>
          <div className={styles.herocontainer}>
            <h1 className={styles.title}>Online Trening vida!</h1>
            <p className={styles.description}>Za decu i odrasle</p>
            <h2>
              Zakaži 15 min besplatne individualne konsultacije na kojim ćemo
              odgovoriti na sva pitanja vezano za tvoj problem sa vidom i
              definisati odgovarajuće opcije Trening vida.{" "}
            </h2>
            <Link href="#forma" ><a className={styles.btn}>
              Saznaj više
            </a></Link>
          </div>
        </div>

        <div className={styles.drustvenemreze}>
          <span>Podeli: </span>
          <Link href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fonline.treningvida.com">
            <a target="_blank" rel="noreferrer" className={styles.fb}>
              <Facebook />
              <span>Facebook</span>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://online.treningvida.com&title='Trening vida!'">
            <a target="_blank" rel="noreferrer" className={styles.in}>
              <Linkedin />
              <span>Linkedin</span>
            </a>
          </Link>
          <Link href="mailto:treningvida@gmail.com?subject=Online%20Trening%20Vida">
            <a target="_blank" rel="noreferrer" className={styles.mail}>
              <Email />
              <span>Prijateljem</span>
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
              <div className={styles.instructorcards}>
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
        <div className={styles.forma} id="forma">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdRqrDEVZV8nOswHY-T0BShNxSFl0lVwR6X3sIFaXiVOqp2TQ/viewform?embedded=true"
            width="100%"
            height="837"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="LeadForma"
          >
            Loading…
          </iframe>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href="https://treningvida.com">
          <a target="_blank" rel="noreferrer">
            <p>&copy; treningvida.com 2021</p>
          </a>
        </Link>
        <Link href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fonline.treningvida.com">
          <a target="_blank" rel="noreferrer">
          <img src="img/facebook.svg" alt="Facebook" width="20" height="20" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://online.treningvida.com&title='Trening vida!'">
          <a target="_blank" rel="noreferrer">
            <img src="img/linkedin.svg" alt="Linked in" width="20" height="20" />
          </a>
        </Link>
        <Link href="mailto:treningvida@gmail.com?subject=Online%20Trening%20Vida">
          <a target="_blank" rel="noreferrer">
            <img src="img/email.svg" alt="Email" width="20" height="20" />
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

import Head from 'next/head';
import Image from 'next/image';
//import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
//const inter = Inter({ subsets: ['latin'] });
import ArticleList from '@/components/AriticleList';


export default function Home({articles}:any) {
  console.log("index",articles);
  console.log(typeof(articles));
  return (
    <>

      <main className={styles.main}>
        <ArticleList list={articles}/>
      </main>
    </>
  );
}

import Head from 'next/head';
import Image from 'next/image';
//import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
//const inter = Inter({ subsets: ['latin'] });
import ArticleList from '@/components/AriticleList';


export default function Home({router,articles}:any) {
  console.log("index",router);
  return (
    <>
      <main className={styles.main}>
        <ArticleList tag = {router.query.tag} list={articles}/>
      </main>
    </>
  );
}

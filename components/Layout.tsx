import styles from '@/styles/components-styles/Layout.module.scss';
import Image from 'next/image';
import Link from 'next/link';
/* eslint-disable react/display-name */
// eslint-disable-next-line import/no-anonymous-default-export
export default function Layout({ children, articles }: any) {
  console.log('layout', articles);
  const articleTags = articles.map((article: article) =>
    article.tag.split(',')
  );
  console.log('layout', articleTags);

  let renderArticleTags: { [key: string]: number } = {};

  let tmpList: string[] = [];
  articleTags.forEach((tagList: string[]) => {
    tagList.forEach((tag: string) => tmpList.push(tag));
  });

  let articleTagsList = ['All'];
  articleTagsList = articleTagsList.concat(Array.from(new Set(tmpList)));
  console.log('pushhhh', articleTagsList);

  //각 tags 문장의 개수 세기
  articleTagsList.forEach((tag: string) => {
    if (tag == 'All') {
      renderArticleTags[tag] = articles.length;
      console.log('tag', renderArticleTags[tag]);
    } else {
      renderArticleTags[tag] = articleTags.filter((a: string[]) =>
        a.includes(tag)
      ).length;
    }
  });
  console.log(articles);
  console.log('render', renderArticleTags);
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.leftContainer}>
          <div className={styles.userinfo}>
            <div className={styles.headerbg} />
            <Image
              src='/favicon.ico'
              alt='logo'
              width={60}
              height={60}
              className={styles.logo}
            />
            <div className={styles.headerCard}>
              <h2>Ken</h2>
              <p>
                <span className={styles.label}>Github: </span>
                <a target='_blank' href='https://github.com/kenH15'>
                  https://github.com/kenH15
                </a>
              </p>
              <p>
                <span className={styles.label}>Intro: </span>
                frontend developer
              </p>
            </div>
          </div>

          <div className={styles.dirclist}>
            <div className={styles.headerbg}>
              <h2>Tag</h2>
            </div>

            <div className={styles.tagCard}>
              {Object.keys(renderArticleTags).map((key: string) => (
                <div className={styles.label}>
                  <Link key={key} href={`/?tag=${key}`}>      
                      {key}
                      <span className={styles.tagNum}>({renderArticleTags[key]})</span>     
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className={styles.rightContainer}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </>
  );
}

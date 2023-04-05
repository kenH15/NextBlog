import styles from '@/styles/components-styles/Layout.module.scss';
import Image from 'next/image';
/* eslint-disable react/display-name */
// eslint-disable-next-line import/no-anonymous-default-export
export default function Layout({ children }: any) {

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
              <h2>category</h2>
            </div>
          </div>
        </aside>

        <div className={styles.rightContainer}>
            <div className={styles.content}>
                {children}
            </div>

        </div>
      </div>
    </>
  );
}

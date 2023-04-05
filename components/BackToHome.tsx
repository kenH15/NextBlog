import Link from 'next/link';
import styles from '@/styles/components-styles/BackToHome.module.scss';

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ()=>(
    <Link href="/">
        <button className={styles.BackToHome}>
            Home
        </button>
    </Link>
);
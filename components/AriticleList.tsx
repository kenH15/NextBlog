import Link from "next/link";
import styles from '@/styles/components-styles/ArticleList.module.scss';
export default function ArticleList({list}:any){


    return(
        <div className={styles.container}>
        {
            list.map((article:article,index:number)=>(
                <div className={styles.listItem} key={index.toString()}>
                    <div className={styles.listHeader}>
                        <span>{article.createTime}</span>
                        <span className={styles.blank}>-</span>
                        <span>{article.author}</span>
                        <span className={styles.blank}>-</span>
                        <span>{article.tag.split(',').join(' / ')}</span>
                    </div>
                    <Link className ={styles.title} href={`/posts/${article.path}`}>
                        {article.title}
                    </Link>
                    <p>
                        {article.description}
                    </p>
                </div>
            ))
        }
        </div>
    );

}
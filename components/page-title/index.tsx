import styles from './title.module.scss';

export default function PageTitleComponent({content}): JSX.Element {
  return (
    <header className={styles.titleWrapper}>
      <div className={styles.titleInner}>
        <span className={styles.titlePrimaryShadow}></span>
        <span className={styles.titleSecondaryShadow}></span>
        <h1 className={styles.title}>{content.text}</h1>
      </div>
    </header>
  )
}
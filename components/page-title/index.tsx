import styles from './title.module.scss';

export default function PageTitleComponent({content}): JSX.Element {
  return (
    <header className={styles.titleWrapper}>
      <h1 className={styles.title + ' highlight'}><span>{content.text}</span></h1>
    </header>
  )
}
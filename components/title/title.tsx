import styles from './title.module.scss';

export interface TitleComponentProps {
  content: {
    text: string;
  }
}

export default function TitleComponent({content}: TitleComponentProps): JSX.Element {
  return (
    <header className={styles.title}>
      <h1>{content.text}</h1>
    </header>
  )
}
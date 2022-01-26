import Image from '../image';
import Paragraph from '../paragraph';
import styles from './body.module.scss';

export default function Body({content}): JSX.Element {
  return (
    <article className={styles.contentWrapper}>
      {content.paragraphs.map((paragraph, index) => (
        <section key={index}>
          {paragraph.title && <h2 className='article-header'>{paragraph.title.text}</h2>}
          {paragraph.body?.json && <Paragraph json={paragraph.body.json} />}
          {paragraph.images && paragraph.images.map((image, index) => <Image key={index} image={image}/>)}
        </section>
      ))}
    </article>
  );
}
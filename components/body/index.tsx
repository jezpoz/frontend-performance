import Image from '../image';
import Paragraph from '../paragraph';
import styles from './body.module.scss';

export default function Body({content}): JSX.Element {
  return (
    <article className={styles.article}>
      {content.paragraphs.map((paragraph, index) => (
        <section key={index} className={styles.articleSection}>
          {paragraph.title && <h2 className='article-header'>{paragraph.title.text}</h2>}
          {paragraph.body?.json && <Paragraph json={paragraph.body.json} />}
          {paragraph.images && paragraph.images.map((image, index) => <Image className="paragraph-image" key={index} image={image} sizes="(max-width: 600px) 80px, 300px"/>)}
        </section>
      ))}
    </article>
  );
}
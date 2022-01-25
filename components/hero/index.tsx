import { Video } from '@crystallize/react-video';
import '@crystallize/react-video/dist/styles.css';
import styles from './hero.module.scss';

export default function HeroComponent({ content }): JSX.Element {
  function renderVideo(video) {
    return (
      <Video className={styles.heroVideo} {...video} />
    )
  }

  return (
    <section className={styles.hero}>
      {content.firstVideo && renderVideo(content.firstVideo)}
    </section>
  )
}
import { Video } from '@crystallize/react-video';
import '@crystallize/react-video/dist/styles.css';
import styles from './hero.module.scss';
import Image from '../image';

export default function HeroComponent({ content }): JSX.Element {
  function renderVideo(video) {
    return (
      <Video
        className={styles.heroVideo}
        thumbnailProps={{
          className: 'thumbnail',
          width: 800,
          height: 'auto',
          sizes: '80vw',
        }}
        {...video}
      />
    )
  }

  return (
    <section className={styles.hero}>
      {content.firstVideo && renderVideo(content.firstVideo)}
    </section>
  )
}
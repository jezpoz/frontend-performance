import { Video } from '@crystallize/react-video';
import '@crystallize/react-video/dist/styles.css';
import styles from './hero.module.scss';

export default function HeroComponent({ content }): JSX.Element {
  function renderVideo(video) {
    return (
      <div className={styles.videoWrapper}>
        <Video
          className={styles.heroVideo}
          thumbnailProps={{
            className: styles.heroVideoThumbnail,
            height: 'auto',
            sizes: '(min-width: 1600px) 1600px, 100vw',
            width: 640,
          }}
          {...video}
        />
      </div>
    )
  }

  return (
    <section className='component-wrapper'>
      {content.firstVideo && renderVideo(content.firstVideo)}
    </section>
  )
}
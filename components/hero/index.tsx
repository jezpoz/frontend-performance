import { Video } from '@crystallize/react-video';
import '@crystallize/react-video/dist/styles.css';
import styles from './hero.module.scss';

export default function HeroComponent({ content }): JSX.Element {
  function renderVideo(video) {
    return (
      <div className={styles.videoWrapper}>
        <span className={styles.videoPrimaryShadow}></span>
        <span className={styles.videoSecondaryShadow}></span>
        <Video
          className={styles.heroVideo}
          videoProps={{
            height: 'auto',
            sizes: '(min-width: 768px)',
            width: 1600,
          }}
          thumbnailProps={{
            className: styles.heroVideoThumbnail,
            loading: 'eager',
            height: 'auto',
            sizes: '(min-width: 768px)',
            width: 1600,
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
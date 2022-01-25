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
            sizes: '(min-width: 3500px) 3500px, (min-width: 2000px) 3500px, (min-width: 1440px) 2000px, (min-width: 1080px) 1440px, (min-width: 720px) 1080px, (min-width: 460px) 720px, 460px',
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
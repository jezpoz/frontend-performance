import { Video } from '@crystallize/react-video';
import '@crystallize/react-video/dist/styles.css';

export default function HeroComponent({ content }): JSX.Element {
  if (content.firstVideo) {
    const { firstVideo } = content;
    return (
      <Video {...firstVideo} />
    )
  }

  return (
    <h1>Hero</h1>
  )
}
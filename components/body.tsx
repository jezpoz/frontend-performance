import ContentTransformer from './content-transformer';
import Image from './image';

export default function Body({content}): JSX.Element {
  return content.paragraphs.map((paragraph, index) => {

    return (
      <div key={index}>
        {paragraph.title && <h1>{paragraph.title.text}</h1>}
        {paragraph.body?.json && <ContentTransformer json={paragraph.body.json} />}
        {paragraph.images && paragraph.images.map((image, index) => <Image key={index} imageFromCrystallize={image} />)}
      </div>
    )
  })
}
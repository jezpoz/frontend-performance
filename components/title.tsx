export interface TitleComponentProps {
  content: {
    text: string;
  }
}

export default function TitleComponent({content}: TitleComponentProps): JSX.Element {
  return (
    <h1>
      {content.text}
    </h1>
  )
}
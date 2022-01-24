import { Image } from '@crystallize/react-image';

export default function ({ imageFromCrystallize }) {
	return (
		<Image
			{...imageFromCrystallize}
			sizes="(max-width: 700px) 90vw, 700px"
		/>
	)
}
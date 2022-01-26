import { Image } from '@crystallize/react-image';
import styles from './image.module.scss';

export default function ({ image, ...rest }) {
	if (!image?.altText) {
		image.altText = '';
	}

	return (
			<Image
				className={styles.image}
				sizes='(min-width: 1600px) 1600px, 100vw'
				loading="lazy"
				{...image}
				{...rest}
			/>
	)
}
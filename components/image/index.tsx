import { Image } from '@crystallize/react-image';
import styles from './image.module.scss';

export default function ({ image, ...rest }) {
	if (!image?.altText) {
		image.altText = '';
	}

	return (
			<Image
				className={styles.image}
				sizes='(min-width: 3500px) 3500px, (min-width: 2000px) 3500px, (min-width: 1440px) 2000px, (min-width: 1080px) 1440px, (min-width: 720px) 1080px, (min-width: 460px) 720px, 460px'
				{...image}
				{...rest}
			/>
	)
}
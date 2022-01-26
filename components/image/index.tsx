import { Image } from '@crystallize/react-image';
import styles from './image.module.scss';

export default function ({ image, ...rest }) {
	if (!image?.altText) {
		image.altText = '';
	}

	return (
			<Image
				className={styles.image}
				sizes='(min-width: 768px)'
        width={1600}
				loading="eager"
				{...image}
				{...rest}
			/>
	)
}
import { Image } from '@crystallize/react-image';
import styles from './image.module.scss';


export default function ({ image, sizes, ...rest }) {
	return (
		<Image
			className={styles.image}
			sizes={sizes}
			{...image}
			{...rest}
		/>
	)
}
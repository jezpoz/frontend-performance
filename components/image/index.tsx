import { Image } from '@crystallize/react-image';
import styles from './image.module.scss';

export default function ({ image, ...rest }) {
	return (
		<Image
			className={styles.image}
			sizes={"80vw"}
			{...image}
			{...rest}
		/>
	)
}
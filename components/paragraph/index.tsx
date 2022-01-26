import { ContentTransformer, NodeContent, Overrides, NodeProps } from '@crystallize/react-content-transformer';
import styles from './paragraph.module.scss';

const overrides: Overrides = {
	link: (props: NodeProps) => {
		return (
				<a
					href={props.metadata?.href}
					rel='no-follow'
					className={styles.paragraphLink}
				>
					<NodeContent {...props} />
				</a>
	)},
	paragraph: (props: NodeProps) => (
		<p className={styles.paragraph}>
			<NodeContent {...props} />
		</p>
	),
	"unordered-list": (props: NodeProps) => (
		<ul className={styles.ulist}>
			<NodeContent {...props} />
		</ul>
	),
};

export default function ({json, ...rest}) {
	return (
		<ContentTransformer json={json} overrides={overrides} {...rest}/>
	);
}
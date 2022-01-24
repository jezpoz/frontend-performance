import { ContentTransformer, NodeContent, Overrides, NodeProps } from '@crystallize/react-content-transformer';

const overrides: Overrides = {
	link: (props: NodeProps) => (
		<a href={props.metadata?.href}>
			<NodeContent {...props} />
		</a>
	),
};

export default function (props) {
	return (
		<ContentTransformer json={props.json} overrides={overrides} />
	);
}
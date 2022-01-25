import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { getPageContent } from '../sources/crystallize';
import Components from '../components';

function HomePage({content}) {
	return (
		<>
			<Head>
				<title>Frontend performance</title>
			</Head>
			{Object.entries(content).map(Components)}
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const pageContent = await getPageContent();

	return {
		props: {
			content: pageContent,
		}
	};
}

export default HomePage;
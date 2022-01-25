import Head from 'next/head';
import '../styles/globals.scss';

export default function App ({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
				<link
						href="https://fonts.googleapis.com/css2?family=Roboto&display=optional"
						rel="stylesheet"
					/>
			</Head>
			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}
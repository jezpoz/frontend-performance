import Head from 'next/head';
import '../styles/globals.scss';

export default function App ({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
				<meta name="description" content="Things to think about when chasing hunting milliseconds and frontend performance"></meta>
				<link rel="canonical" href="https://frontend-performance-phi.vercel.app" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Frontend performance" />
				<meta property="og:description" content="Things to think about when chasing frontend performance" />
				<meta property="og:image" content="https://frontend-performance-phi.vercel.app/android-chrome-512x512.png" />
				<meta property="og:url" content="https://frontend-performance-phi.vercel.app" />
				<meta property="og:site_name" content="Frontend performance" />
				<meta name="twitter:title" content="Frontend performance"></meta>
				<meta name="twitter:description" content="Things to think about when chasing frontend performance"></meta>
				<meta name="twitter:image" content="https://frontend-performance-phi.vercel.app/android-chrome-512x512.png"></meta>
				<meta name="twitter:site" content="@jezpoz"></meta>
				<meta name="twitter:creator" content="@jezpoz"></meta>
				{/* Fix video for mobile */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.5.14/hls.min.js"
					integrity="sha512-js37JxjD6gtmJ3N2Qzl9vQm4wcmTilFffk0nTSKzgr3p6aitg73LR205203wTzCCC/NZYO2TAxSa0Lr2VMLQvQ=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
					defer
				></script>
			</Head>
			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}
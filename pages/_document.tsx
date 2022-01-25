import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
					<link rel="manifest" href="/site.webmanifest"></link>
					<meta name="msapplication-TileColor" content="#da532c"></meta>
					<meta name="theme-color" content="#ffffff"></meta>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document;
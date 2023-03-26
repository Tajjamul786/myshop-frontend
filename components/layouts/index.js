import Head from "next/head";
import Header from "../Header";

export default function Layout({ pageTitle, description, keywords, children }) {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header />
			{children}
		</>
	)
}

Layout.defaultProps = {
	pageTitle: "Myshop",
	description: "Get all your school need",
	keywords: "store, online shop, buy stationaries"
}

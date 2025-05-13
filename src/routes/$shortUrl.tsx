import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/$shortUrl")({
	loader: async ({ params: { shortUrl } }) => {
		console.log("👻 shortUrl:", shortUrl);
		// Search for the short url if not found throw it

		// throw notFound();
	},
	component: ShortUrl,
	notFoundComponent: () => {
		return <p>Not found</p>;
	},
});

function ShortUrl() {
	const { shortUrl } = useParams({ from: "/$shortUrl" });

	return <h1>This is my param: {shortUrl}</h1>;
}

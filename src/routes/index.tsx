import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main>
			<Header />

			<div className="grid gap-4">
				<Button label="Primary" type="button" />
				<Button label="Primary" type="button" disabled />

				<Button label="Secondary" type="button" variant="secondary" />
			</div>
		</main>
	);
}

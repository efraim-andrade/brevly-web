import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Warning } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="max-w-[980px] mx-auto">
			<Header />

			<div className="flex flex-col gap-4 w-full justify-center">
				<Button label="Primary" type="button" />
				<Button label="Primary" type="button" disabled />

				<Button
					label="Secondary"
					type="button"
					variant="secondary"
					icon={<Warning />}
				/>
			</div>
		</main>
	);
}

import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { IconButton } from "@/components/IconButton";
import { Input } from "@/components/Input";
import { Warning } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="max-w-[980px] mx-auto">
			<Header />

			<div className="flex flex-col gap-4">
				<Button
					label="Secondary"
					type="button"
					variant="secondary"
					icon={<Warning />}
				/>

				<Button label="Primary" type="button" />
				<Button label="Primary" type="button" disabled />

				<IconButton icon={<Warning />} />

				<Input label="Título" placeholder="Placeholder" />
				<Input
					label="Título"
					placeholder="Placeholder"
					error="Something went wrong"
				/>
			</div>
		</main>
	);
}

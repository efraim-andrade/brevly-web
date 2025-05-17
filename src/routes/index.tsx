import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { IconButton } from "@/components/IconButton";
import { Input } from "@/components/Input";
import { DownloadSimple, Warning } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="max-w-[980px] mx-auto ">
			<Header />

			<Card
				title="Novo Link"
				renderAction={
					<Button
						icon={<DownloadSimple />}
						label="Baixar CSV"
						variant="secondary"
					/>
				}
			>
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
			</Card>
		</main>
	);
}

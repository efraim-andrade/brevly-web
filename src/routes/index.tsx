import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { DownloadSimple } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="max-w-[980px] mx-auto flex flex-col gap-3">
			<Header />

			<Card title="Novo Link">
				<form className="w-full flex flex-col gap-4" action="">
					<Input label="Link Original" placeholder="www.exemplo.com.br" />

					<Input label="Link Encurtado" placeholder="brev.ly/" />

					<Button label="Salvar link" />
				</form>
			</Card>

			<Card
				title="Meus links"
				renderAction={
					<Button
						icon={<DownloadSimple />}
						label="Baixar CSV"
						variant="secondary"
					/>
				}
			>
				<div>Links</div>
			</Card>
		</main>
	);
}

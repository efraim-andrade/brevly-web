import { Warning } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="bg-gray-100 h-dvh w-dvw">
			<h1 className="text-lg">
				Hello world <Warning className="inline-block" />
			</h1>
		</div>
	);
}

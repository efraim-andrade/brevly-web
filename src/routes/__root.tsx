import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: () => (
		<div className="mx-4 my-8 lg:my-[88px]">
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	),
});

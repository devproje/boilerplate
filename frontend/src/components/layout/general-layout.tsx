import { Outlet } from "react-router";

function GeneralLayout() {
	return (
		<div className="container flex flex-col bg-background text-foreground md:w-3xl lg:w-4xl">
			<Outlet />
		</div>
	);
}

export default GeneralLayout;

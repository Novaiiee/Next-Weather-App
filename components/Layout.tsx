import { FC } from "react";
import { Navbar } from "./Navbar";

export const Layout: FC = ({ children }) => {
	return (
		<div className="font-inter px-28">
			<Navbar />
			{children}
		</div>
	);
};

import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
	return (
		<div className="flex justify-between py-10">
			<h1 className="font-semibold">Weather App</h1>
			<div className="flex space-x-6">
        <Link href="/">Home</Link>
				<Link href="/about">About</Link>
        <Link href="/search">Search</Link>
			</div>
		</div>
	);
};

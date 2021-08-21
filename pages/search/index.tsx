import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export default function Search() {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const submit = () => {
		if (!query) return;
		router.push(`/search/${query}`);
	};

	return (
		<>
			<Head>
				<title>Search | Weather App</title>
			</Head>
			<div className="flex items-center justify-center h-full w-full">
				<div className="flex items-center space-x-2 w-full">
					<Input handleChange={handleQueryChange} value={query} placeholder="Enter in a location" />
					<Button onClick={submit}>Search</Button>
				</div>
			</div>
		</>
	);
}

import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Forecast {
	location: string;
	time: string;
	temp: string;
	feelsLike: string;
	condition: {
		text: string;
		icon: string;
	};
}

export default function Forecast() {
	const [forecast, setForecast] = useState<Forecast | null>(null);
	const [error, setError] = useState("");

	const router = useRouter();
	const { location } = router.query;

	useEffect(() => {
		const fetchForecast = async () => {
			try {
				const res = await fetch(
					`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`
				);

				const data = await res.json();

				if (data.error) {
					setError(data.error.message);
					return;
				}

				const current = data.current;
				const locationData = data.location;

				setForecast({
					location: `${locationData.name}, ${locationData.country}`,
          condition: {
            icon: "https://" + current.condition.icon.split("//")[1],
            text: current.condition.text
          },
					feelsLike: current.feelslike_c,
					temp: current.temp_c,
					time: locationData.time,
				});
			} catch (err) {
				console.log(err.message);
			}
		};

		fetchForecast();
	}, [location]);

	if (error && !forecast) {
		return <div>Location not found</div>;
	}

	return (
		<>
			<Head>
				<title>{location} | Weather App</title>
			</Head>
			<div>
				<h1>{forecast?.location}</h1>
				<h1>Current Temperature: {forecast?.temp}</h1>
				<h1>Feels Like {forecast?.feelsLike}</h1>
				<span>
					{forecast?.condition.text}
					<Image
						src={
							forecast?.condition.icon ??
							"https://cdn.blankstyle.com/files/imagefield_default_images/notfound_0.png"
						}
						alt={`Condition: ${forecast?.condition}`}
						width={100}
						height={100}
					/>
				</span>
			</div>
		</>
	);
}

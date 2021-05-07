import React, { useState, useEffect } from "react";
import API from "./API";
const User = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [result, setResult] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			async function fetchData() {
				let userData = await API.get("/", {
					params: {
						results: 10,
						inc: "name,email,picture",
					},
				}).catch((e) => setError(e.response.status));
        setError(userData.status)
				console.log(userData);
				setIsLoading(true);
				setData(userData.data.results[0]);
				setResult(userData.data.results);
				return userData;
			}
			fetchData();
		} catch (e) {
			console.log(`😱 Axios request failed: ${e}`);
		}
	}, []);
	console.log(data);
	console.log(`😱😍 Axios request failed: ${error}`);
	if (error !== 404)
		return (
			<>
				{isLoading ? (
					<>
						<div>User is {data.email}</div>

						{result.map((item) => {
							return (
								<ul>
									<li key={Math.random().toString(36).substr(2, 9)}>
										<h1>{item.email}</h1>
										<img src={`${item.picture.large}`} alt='a' />
										<p>{item.name.first}</p>
									</li>
								</ul>
							);
						})}
					</>
				) : (
					<div>Loading...</div>
				)}
			</>
		);
	else {
		return <div>Page 404 Found </div>;
	}
};

export default User;

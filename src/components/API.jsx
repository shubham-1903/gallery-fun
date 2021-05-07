import axios from "axios";
export default axios.create({
  baseURL: "https://randomuser.me/api/",
  responseType: "json"
});
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await axios.get("https://randomuser.me/api/");
	// 		console.log(result);
	// 		setData(result.data);
	// 	};
	// 	fetchData();
	// 	console.log(data);
	// }, []);
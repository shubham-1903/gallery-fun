import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/image.css";
import Grid from "../components/GridLayout";
import RandomImages from "../components/RandomImages";

const Image = ({ search, keyValue }) => {
	const [dataSearch, setDataSearch] = useState([]);
	const [selectedValue, setSelectedValue] = useState("");

	const api = {
		keys: process.env.REACT_APP_SECRET_KEY,
		base: "https://api.unsplash.com/",
	};
	const handleClickSelect = (e) => {
		setSelectedValue(e.target.value);
	};
	const handleSubmitSelect = (e) => {
		e.preventDefault();
		const search_image_url = `${api.base}search/photos?page=2&query=${search}&order_by=${selectedValue}&client_id=${api.keys}`;
		async function fetchData() {
			let userDataSearchImage = await axios
				.get(search_image_url)
				.catch((e) => console.log(`error message2: ${e.message}`));
			setDataSearch(userDataSearchImage.data.results);
		}
		fetchData();
	};
	const handleSubmit = (keyValue) => {
		console.log(`keyValue: ${keyValue}`);
		if (keyValue === "Enter") {
			const search_image_url = `${api.base}search/photos?page=2&query=${search}&order_by=${selectedValue}&client_id=${api.keys}`;
			console.log(search_image_url);
			async function fetchData() {
				let userDataSearchImage = await axios
					.get(search_image_url)
					.catch((e) => console.log(`error message2: ${e.message}`));
				setDataSearch(userDataSearchImage.data.results);
			}
			fetchData();
		}
	};
	console.log(dataSearch.length);
	useEffect(() => {
		handleSubmit(keyValue);
	}, [search, selectedValue]);
	return (
		<>
			<div className='header1'>
				<h1>Random Images</h1>
			</div>
			<div className='random-image'>
				<hr />
				<RandomImages />
			</div>
			<div className='border1'></div>
			<div className='header2'>
				<h1>Searched Images</h1>
			</div>
			<div className='form'>
				<form action='' onSubmit={handleSubmitSelect}>
					<label className='form_label' for='images'>
						Choose a Category:{" "}
					</label>
					<select name='category' id='category' onChange={handleClickSelect}>
						<option value='relevant'>relevant</option>
						<option value='latest'>latest</option>
					</select>
					<input
						className='form_input'
						type='submit'
						value='submit'
						onClick={() => handleSubmitSelect}
					/>
				</form>
			</div>
			<div className='search-image'>
			</div>
			{dataSearch.length !== 0 ? <Grid dataSearch={dataSearch} /> : null}
		</>
	);
};

export default Image;

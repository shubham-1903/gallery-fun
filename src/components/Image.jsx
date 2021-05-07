import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/image.css";
import Grid from "../components/GridLayout";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import RandomImages from "../components/RandomImages";
import Loader from "../components/loadingSvg";

const Image = ({ search, keyValue }) => {
	const [dataRandom, setDataRandom] = useState([]);
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
		console.log("selected val: " + selectedValue);
		const search_image_url = `${api.base}search/photos?page=2&query=${search}&order_by=${selectedValue}&client_id=${api.keys}`;
		async function fetchData() {
			let userDataSearchImage = await axios
				.get(search_image_url)
				.catch((e) => console.log(`error message2: ${e.message}`));
			console.log(userDataSearchImage);
			setDataSearch(userDataSearchImage.data.results);
			console.log(dataRandom);
			console.log(dataSearch);
		}
		fetchData();
	};
	const handleSubmit = (keyValue) => {
		console.log(`keyValue: ${keyValue}`);
		if (keyValue === "Enter") {
			// const random_image_url = `${api.base}/photos/random?count=6&client_id=${api.keys}`;
			const search_image_url = `${api.base}search/photos?page=2&query=${search}&order_by=${selectedValue}&client_id=${api.keys}`;
			// console.log(random_image_url);
			console.log(search_image_url);
			async function fetchData() {
				// let userDataRandomImage = await axios
				// 	.get(random_image_url)
				// 	.catch((e) => console.log(`error message1: ${e.message}`));
				let userDataSearchImage = await axios
					.get(search_image_url)
					.catch((e) => console.log(`error message2: ${e.message}`));
				// console.log(userDataRandomImage);
				console.log(userDataSearchImage);
				// setDataRandom(userDataRandomImage.data);
				setDataSearch(userDataSearchImage.data.results);
				console.log(dataRandom);
				console.log(dataSearch);
			}
			fetchData();
		}
	};
	console.log(dataSearch.length);
	useEffect(() => {
		handleSubmit(keyValue);
		// setDataSearch([])
	}, [search, selectedValue]);
	return (
		<>
			<div className='header1'>
				<h1>Random Images</h1>
			</div>
			<div className='random-image'>
				<hr />
				<RandomImages />
				{/* <ul>
					{dataRandom.map((item) => {
						return (
							<li
								key={Math.random().toString(36).substr(2, 9)}
								className={`list-style`}
							>
								<div style={{ color: `${item.color}` }} className='heart-icon'>
									<span>
										<FavoriteIcon />
									</span>
									<span className='likes'>{item.likes}</span>
								</div>
								<img
									className={`images`}
									src={`${item.urls.small}`}
									alt={`${item.alt_description}`}
								/>
								<div className='download-icons'>
									<a
										href={item.links.download}
										target='_blank'
										rel='noreferrer'
									>
										<ArrowDownwardIcon />
									</a>
								</div>
							</li>
						);
					})}
				</ul> */}
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
				{/* <ul>
					{dataSearch.map((item, index = 1) => {
						return (
							<li
								key={Math.random().toString(36).substr(2, 9)}
								className={`img-${index}`}
							>
								<h1 style={{ color: `${item.color}` }}>{item.id}</h1>
								<img
									src={`${item.urls.full}`}
									alt={`${item.alt_description}`}
									className={`image image-${index}`}
								/>
								<p>{item.views}</p>
							</li>
						);
					})}
				</ul> */}
			</div>
			{dataSearch.length !== 0 ? <Grid dataSearch={dataSearch} /> : null}
		</>
	);
};

export default Image;

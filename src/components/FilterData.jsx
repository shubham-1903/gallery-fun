import React, { useState, useEffect } from "react";
import Image from "../components/Image";
import "../styles/filter.css";
const FilterData = () => {
	const [text, setText] = useState("");
	const [search, setSearch] = useState("");
	const [keyValue, setKeyValue] = useState("");
	const handleOnChange = (e) => {
		setText(e.target.value);
	};

	// const filterFunction = () => {
	// 	let filterData = Data.filter(function (e) {
	// 		return e.title.includes(search);
	// 	});
	// 	filterData.forEach((element) => {
	// 		console.log(`filter data: ${element}`);
	// 	});
	// 	console.log(`filter data: ${filterData}`);
	// 	console.log(typeof search);
	// };

	// const filterFunction = () => {
	// 	filterDatas = Data.filter(function (e) {
	// 		return e.title.toLowerCase().includes(search.toLowerCase());
	// 	});
	// 	filterData.forEach((element) => {
	// 		console.log(element);
	// 	});
	// 	console.log(`filter data: ${filterDatas.length}`);
	// 	console.log(typeof filterDatas);
	// 	console.log();
	// 	// filterData = null;
	// };
	// console.log(filterData);
	const handleEnter = (e) => {
		if (e.key === "Enter") {
			setKeyValue(e.key);
			setSearch(text);
			setText("");
		} else {
			console.log("Somthing 😭😭");
		}
		// console.log(`enter value=${e.key}`);
	};

	useEffect(() => {
		setKeyValue("");
	}, [text]);
	console.log(`😀😊😘S ${search}`);
	console.log(`😀😊😘👧🧑T ${text}`);
	console.log(`😀😊😘👧🧑Key ${keyValue}`);
	return (
		<>
			<div className='input_filter'>
				<input
					type='search'
					name={text}
					value={text}
					id=''
					placeholder='Search...'
					onChange={handleOnChange}
					onKeyDown={handleEnter}
				/>
			</div>
			{/* <h1>{keyValue === "Enter" ? text : "None"}</h1> */}
			<Image search={search} keyValue={keyValue} />
		</>
	);
};

export default FilterData;

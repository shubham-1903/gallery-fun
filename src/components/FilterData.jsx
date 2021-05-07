import  { useState, useEffect } from "react";
import Image from "../components/Image";
import "../styles/filter.css";
const FilterData = () => {
	const [text, setText] = useState("");
	const [search, setSearch] = useState("");
	const [keyValue, setKeyValue] = useState("");
	const handleOnChange = (e) => {
		setText(e.target.value);
	};
	const handleEnter = (e) => {
		if (e.key === "Enter") {
			setKeyValue(e.key);
			setSearch(text);
			setText("");
		} else {
			console.log("Somthing 😭😭");
		}
	};

	useEffect(() => {
		setKeyValue("");
	}, [text]);
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
			<Image search={search} keyValue={keyValue} />
		</>
	);
};

export default FilterData;

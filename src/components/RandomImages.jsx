import axios from "axios";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "../styles/image.css";
import Loader from "../components/loadingSvg"
const RandomImages = () => {
	const [images, setImages] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	useEffect(() => {
		fetchImages();
	}, []);
	const fetchImages = (count = 10) => {
		if (images.length >= 30) {
			setHasMore(false);
		}
		const api = {
			keys: process.env.REACT_APP_SECRET_KEY,
			base: "https://api.unsplash.com/",
		};
		const random_image_url = `${api.base}/photos/random?count=${count}&client_id=${api.keys}`;

		axios
			.get(random_image_url)
			.then((res) => {
				setTimeout(() => {
					setImages([...images, ...res.data]);
				}, 1500);
			})
			.catch((e) => {
				console.log("error random: " + typeof e + e);
			});
	};
	console.log("images lenght" + images.length);
	return (
		<div className="scrollbar scrollbar-primary" id='scrollableDiv'>
			<InfiniteScroll
				dataLength={images.length} //This is important field to render the next data
				next={fetchImages}
				hasMore={hasMore}
				loader={<Loader />}
				height={400}
				scrollableTarget='scrollableDiv scrollbar scrollbar-primary'
				endMessage={
					<p style={{ textAlign: "center" }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				<ul>
					{images.map((item) => {
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
				</ul>
			</InfiniteScroll>
		</div>
	);
};

export default RandomImages;

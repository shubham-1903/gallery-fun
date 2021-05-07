import React from "react";
import "../styles/gridflex.css";
const Gridcss = ({ dataSearch }) => {
	return (
		<>
			<div>
				<header className='header'>
					<h1>CSS Grid Layout</h1>
					<h2>With @support flexbox fallback.</h2>
				</header>

				<div className='grid '>
					{dataSearch.map((item, index = 1) => {
						return (
							<div className='item' tabindex={index}>
								<div className={`box imgs-${index}`}>
									<img
										className={`images images-${index}`}
										src={`${item.urls.full}`}
										alt={`${item.alt_description}`}
									/>
									{/* <div className='tooltip'>grid-area: hero</div> */}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{/* <div className='item' tabindex='1'>
					<div className='box'>
						<div className='diamond'>
							<span>1</span>
						</div>
						<div className='tooltip'>grid-area: hero</div>
					</div>
				</div>

				<div className='item' tabindex='2'>
					<div className='box'>
						<div className='diamond'>
							<span>2</span>
						</div>
						<div className='tooltip'>grid-area: big</div>
					</div>
				</div>
				<div className='item' tabindex='3'>
					<div className='box'>
						<div className='diamond'>
							<span>3</span>
						</div>
						<div className='tooltip'>grid-area: medium</div>
					</div>
				</div>
				<div className='item' tabindex='4'>
					<div className='box'>
						<div className='diamond'>
							<span>4</span>
						</div>
						<div className='tooltip'>grid-area: medium</div>
					</div>
				</div>
				<div className='item' tabindex='5'>
					<div className='box'>
						<div className='diamond'>
							<span>5</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div>
				<div className='item' tabindex='6'>
					<div className='box'>
						<div className='diamond'>
							<span>6</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div>
				<div className='item' tabindex='7'>
					<div className='box'>
						<div className='diamond'>
							<span>7</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div>
				<div className='item' tabindex='8'>
					<div className='box'>
						<div className='diamond'>
							<span>8</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div>
				<div className='item' tabindex='9'>
					<div className='box'>
						<div className='diamond'>
							<span>9</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div>
				<div className='item' tabindex='10'>
					<div className='box'>
						<div className='diamond'>
							<span>10</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div>
				<div className='item' tabindex='11'>
					<div className='box'>
						<div className='diamond'>
							<span>11</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div>
				<div className='item' tabindex='12'>
					<div className='box'>
						<div className='diamond'>
							<span>12</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div>
				<div className='item' tabindex='13'>
					<div className='box'>
						<div className='diamond'>
							<span>13</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div>
				<div className='item' tabindex='14'>
					<div className='box'>
						<div className='diamond'>
							<span>14</span>
						</div>
						<div className='tooltip'>grid-area: small</div>
					</div>
				</div> */}
		</>
	);
};

export default Gridcss;

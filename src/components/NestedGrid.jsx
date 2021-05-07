import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflowX: "hidden",
		padding: "5px",
		backgroundColor: "blue",
	},
}));

export default function FullWidthGrid({ image,height }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container direction='row' spacing={1}>
				<Grid item md={5} xs={12}>
					<img
						style={{
							height: {height},
							width: "100%",
							objectFit: "cover",
						}}
						src={image[0].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item md={7} xs={12} sm={12} spacing={2}>
					<Grid item direction='column' sm={12} xs={12} md={12}>
						<img
							style={{
								height: "400px",
								marginBottom: "3px",
								width: "100%",
								objectFit: "cover",
							}}
							src={image[1].urls.full}
							alt=''
							srcset=''
						/>
					</Grid>
					<Grid item direction='column' sm={12} xs={12} md={12}>
						<img
							style={{
								height: "400px",
								width: "100%",
								objectFit: "cover",
							}}
							src={image[2].urls.full}
							alt=''
							srcset=''
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

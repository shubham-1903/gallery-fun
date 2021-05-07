import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflowX: "hidden",
		padding: "20px",
		marginBottom: "5px",
	},
	imgStyle: {
		objectFit: "cover",
		height: "400px",
		width: "100%",
	},
}));

export default function FullWidthGrid({ dataSearch }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item md={8} xs={12} >
					<img
						className={classes.imgStyle}
						src={dataSearch[9].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<img
						className={classes.imgStyle}
						src={dataSearch[0].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<img
						className={classes.imgStyle}
						src={dataSearch[1].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<img
						className={classes.imgStyle}
						src={dataSearch[2].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<img
						className={classes.imgStyle}
						src={dataSearch[3].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={7}>
					<img
						className={classes.imgStyle}
						src={dataSearch[4].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={5}>
					<img
						className={classes.imgStyle}
						src={dataSearch[5].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<img
						className={classes.imgStyle}
						src={dataSearch[6].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<img
						className={classes.imgStyle}
						src={dataSearch[7].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<img
						className={classes.imgStyle}
						src={dataSearch[8].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={8} md={4}>
					<img
						className={classes.imgStyle}
						src={dataSearch[9].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={8}>
					<img
						className={classes.imgStyle}
						src={dataSearch[0].urls.full}
						alt=''
						srcset=''
					/>
				</Grid>
			</Grid>
		</div>
	);
}

import * as React from "react";
import favicon from "../../images/favicon-bg.png";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { Button, MenuItem } from "@mui/material";
import pages from "../../pages.js";

export default function Footer() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Box
				component="footer"
				sx={{
					py: 3,
					px: 2,
					mt: "auto",
					backgroundColor: (theme) =>
						theme.palette.mode === "light"
							? theme.palette.grey[200]
							: theme.palette.grey[800],
				}}
			>
				<Container
					maxWidth="sm"
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					{/* <Typography variant="body1">
						Contact Us
					</Typography> */}
					<div className="header-left-image">
						<img src={favicon} alt="Scholorshipopolis" />
					</div>
					<div
						className="footer-nav"
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						{pages.map((page) => (
							<MenuItem key={page}>
								<RouterLink to={page.link}>
									{page.text}
								</RouterLink>
							</MenuItem>
						))}
					</div>
				</Container>
			</Box>
		</Box>
	);
}

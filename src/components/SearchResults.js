import React, { useContext } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import FlightCard from './FlightCard'

const SearchResults = ({ flights }) => {
	return (
		<Box component="section">
			<Typography variant="h5" component="h2" gutterBottom>
				Search results
			</Typography>
			<Grid container spacing={2}>
				{flights.map(flight => (
					<Grid item key={flight.id} xs={12} sm={6} md={3}>
						<FlightCard flight={flight} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default SearchResults

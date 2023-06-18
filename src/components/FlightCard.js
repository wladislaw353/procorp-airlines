import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'

const FlightCard = ({ flight, setSelectedFlight }) => {
	const history = useNavigate()

	const handleSelect = () => {
		setSelectedFlight(flight)
		history.push('/booking')
	}

	return (
		<Card>
			<CardContent>
				<Typography variant="h6" component="h3" gutterBottom>
					{flight.from} → {flight.to}
				</Typography>
				<Box mb={2}>
					<Typography variant="body2" color="textSecondary">
						Departure: {new Date(flight.departure).toLocaleString()}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						Arrival: {new Date(flight.arrival).toLocaleString()}
					</Typography>
				</Box>
				<Typography variant="body1">Duration: {flight.duration}</Typography>
				<Typography variant="h5" component="p">
					{flight.price} ₽
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary" onClick={handleSelect}>
					Choose
				</Button>
			</CardActions>
		</Card>
	)
}

export default FlightCard

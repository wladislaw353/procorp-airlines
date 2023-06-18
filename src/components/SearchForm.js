import React, { useContext, useState, useEffect } from 'react'
import { FlightsContext } from '../contexts/FlightsContext'
import { Box, Button, Grid, Slider, TextField, Typography } from '@mui/material'

const SearchForm = ({ onSearch }) => {
	const { flights } = useContext(FlightsContext)
	const minPrice = Math.min(...flights.map(flight => flight.price))
	const maxPrice = Math.max(...flights.map(flight => flight.price))
	const [from, setFrom] = useState('')
	const [to, setTo] = useState('')
	const [departureDate, setDepartureDate] = useState('')
	const [departureTime, setDepartureTime] = useState('')
	const [arrivalDate, setArrivalDate] = useState('')
	const [arrivalTime, setArrivalTime] = useState('')
	const [priceRange, setPriceRange] = useState([minPrice, maxPrice])
	const [seats, setSeats] = useState(1)
	const [error, setError] = useState(null)

	useEffect(() => {
		setPriceRange([minPrice, maxPrice])
	}, [minPrice, maxPrice])

	const handleSearch = e => {
		e.preventDefault()
		if (new Date(`${arrivalDate}T${arrivalTime}`) < new Date(`${departureDate}T${departureTime}`)) {
			setError('Enter the correct date and time')
			return
		}
		setError(null)
		onSearch({
			from,
			to,
			departureDate,
			departureTime,
			arrivalDate,
			arrivalTime,
			minPrice: priceRange[0],
			maxPrice: priceRange[1],
			seats,
		})
	}

	return (
		<Box component="section" mb={4}>
			<Typography variant="h5" component="h2" gutterBottom>
				Flight Search
			</Typography>
			{error && (
				<Box mb={2}>
					<Typography color="error">{error}</Typography>
				</Box>
			)}
			<form onSubmit={handleSearch}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField label="From" value={from} onChange={e => setFrom(e.target.value)} fullWidth />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField label="To" value={to} onChange={e => setTo(e.target.value)} fullWidth />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<TextField
							label="Departure date"
							type="date"
							value={departureDate}
							onChange={e => setDepartureDate(e.target.value)}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<TextField
							label="Departure time"
							type="time"
							value={departureTime}
							onChange={e => setDepartureTime(e.target.value)}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<TextField
							label="Arrival date"
							type="date"
							value={arrivalDate}
							onChange={e => setArrivalDate(e.target.value)}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<TextField
							label="Arrival time"
							type="time"
							value={arrivalTime}
							onChange={e => setArrivalTime(e.target.value)}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							label="Number of seats"
							type="number"
							value={seats}
							onChange={e => setSeats(e.target.value)}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography id="price-range-slider" gutterBottom>
							Price: {priceRange[0]} – {priceRange[1]}
						</Typography>
						<Slider
							value={priceRange}
							onChange={(e, newValue) => setPriceRange(newValue)}
							valueLabelDisplay="auto"
							aria-labelledby="price-range-slider"
							min={minPrice}
							max={maxPrice}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button type="submit" variant="contained" color="primary">
							Search flights
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	)
}

export default SearchForm

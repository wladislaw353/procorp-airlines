import React, { useContext, useState } from 'react'
import { FlightsContext } from '../contexts/FlightsContext'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import { Container, Typography } from '@mui/material'

const SearchPage = () => {
	const { flights: allFlights } = useContext(FlightsContext)
	const [flights, setFlights] = useState([])

	const handleSearch = data => {
		const filteredFlights = allFlights.filter(flight => {
			return (
				(data.from ? flight.from === data.from : true) &&
				(data.to ? flight.to === data.to : true) &&
				(data.departureDate && data.departureTime
					? new Date(flight.departure) >= new Date(`${data.departureDate}T${data.departureTime}`)
					: true) &&
				(data.arrivalDate && data.arrivalTime
					? new Date(flight.arrival) <= new Date(`${data.arrivalDate}T${data.arrivalTime}`)
					: true) &&
				(data.minPrice ? flight.price >= data.minPrice : true) &&
				(data.maxPrice ? flight.price <= data.maxPrice : true) &&
				(data.seats ? flight.seats.filter(seat => seat.available).length >= data.seats : true)
			)
		})
		setFlights(filteredFlights)
	}

	return (
		<Container>
			<SearchForm onSearch={handleSearch} />
			{flights.length > 0 ? (
				<SearchResults flights={flights} />
			) : (
				<Typography variant="body1">Nothing found</Typography>
			)}
		</Container>
	)
}

export default SearchPage

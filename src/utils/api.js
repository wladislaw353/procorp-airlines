export async function apiRequest(path, data = null, method = 'GET') {
	const response = await fetch(path, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: data ? JSON.stringify(data) : null,
	})

	if (response.ok) {
		return await response.json()
	} else {
		return false
	}
}

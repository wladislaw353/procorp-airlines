export async function apiRequest(path, method = 'GET') {
	const response = await fetch(path, { method })
	
	if (response.ok) {
		return await response.json()
	} else {
		return false
	}
}

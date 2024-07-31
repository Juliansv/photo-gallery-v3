import "server-only"; // This import is only available on the server

export async function getCollections() {
	try {
		const response = await fetch(
			"http://localhost:1337/api/collections?populate=*",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

export async function getCollectionById(id: number) {
	try {
		const response = await fetch(
			`http://localhost:1337/api/collections/${id}?populate=*`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

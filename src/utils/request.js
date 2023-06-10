import { getJwtToken } from "../apis/auth";

export async function request(
	url,
	{ method = "GET", body, headers, auth = true } = {}
) {
	const res = await fetch(url, {
		method,
		headers: {
			"Content-Type": "application/json",
			...headers,
			...(auth && {
				Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
			}),
		},
		...(body && { body: JSON.stringify(body) }),
	});
	const result = await res.json();
	if (res.ok) {
		return result;
	}
	throw new Error(result.message);
}

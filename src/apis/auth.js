import { request } from "../utils/request";
export function getJwtToken() {
	return localStorage.getItem("jwtToken");
}

export function setJwtToken(jwt) {
	localStorage.setItem("jwtToken", jwt);
}
// 获取用户信息
export function getUser() {
	// 字符串转换为对象
	return JSON.parse(localStorage.getItem("user"));
}
// 将注册的用户信息存储到localstorage中
export function saveUser(user) {
	// 作为字符串存储
	localStorage.setItem("user", JSON.stringify(user));
}
export async function register(email, username, password) {
	const result = await request("/api/auth/local/register", {
		method: "POST",
		auth: false,
		body: {
			email,
			username,
			password,
			name: username,
		},
	});
	setJwtToken(result.jwt);
	console.log("auth-result", result);
	saveUser(result.user);
	return result;
}
export async function login(email, password) {
	const result = await request("/api/auth/local", {
		method: "POST",
		auth: false,
		body: {
			identifier: email,
			password,
		},
	});
	setJwtToken(result.jwt);
	saveUser(result.user);
	return result;
}
// 退出登录
export function logout() {
	localStorage.removeItem("jwtToken");
	localStorage.removeItem("user");
}

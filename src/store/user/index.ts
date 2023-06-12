import { getUser, register, login } from "../../apis/auth";
import { changeUser } from "../../apis/user"
export const user = {
	state() {
		return {
			user: getUser() || {},
		};
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
	},
	actions: {
		async registerUser({ commit }, { email, username, password }) {
			const user = await register(email, username, password)
			commit('setUser', user)
		},
		async loginUser({ commit }, { email, password }) {
			const user = await login(email, password)
			commit('setUser', user)
		},
		async updateUser({ commit }, user) {
			const updateUser = await changeUser(user)
			commit('setUser', updateUser)
			console.log('state.user', JSON.parse(JSON.stringify(user)));

		}
	},
	getters: {},
};

import { createStore } from "vuex"

const store = createStore({
	state: {
		cart: [],
	},
	getters: {
		cartLength(state){
			return state.cart.length
		},
		cartTotal(state){
			let total = 0 
			state.cart.forEach(item=>{
				total += item.price
			})
			return total
		}
	},
	mutations: {
		addProduct(state,product){
			state.cart.push(product)
		},
		removeProduct(state,index){
			state.cart.splice(index,1)
		}
	},
	actions: {},
	plugins: [],
})

export default store

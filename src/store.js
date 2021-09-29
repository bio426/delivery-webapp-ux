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
		addItem(state,product){
			state.cart.push(product)
		},
		removeItem(state,index){
			state.cart.splice(index,1)
		},
		addItemQuantity(state,index){
			let item = state.cart[index]
			if (item.quantity < 99) {
				item.quantity++
			}
		},
		removeItemQuantity(state,index){
			let item = state.cart[index]
			if (item.quantity > 1) {
				item.quantity--
			}
		}
	},
	actions: {},
	plugins: [],
})

export default store

import Vue from 'vue'

export const state = () => ({
  products: []
})

export const getters = {
  products: (state) => state.products
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    for (const product of products) {
      state.products.push(product)
    }
  },
  ADD_PRODUCT(state, product) {
    state.products.push(product)
  },
  UPDATE_PRODUCT(state, newProduct) {
    const productIndex = state.products.findIndex(
      ({ id }) => id === newProduct.id
    )
    Vue.set(state.products, productIndex, newProduct)
  },
  DELETE_PRODUCT(state, productId) {
    const productIndex = state.products.findIndex(({ id }) => id === productId)
    state.products.splice(productIndex, 1)
  }
}

export const actions = {
  async fetchProducts({ commit, state }) {
    if (state.products.length) return
    const { data } = await this.$axios.$get('products')
    commit('SET_PRODUCTS', data)
  },
  async createProduct({ commit, state }, product) {
    const { data } = await this.$axios.$post('products', product)
    commit('ADD_PRODUCT', data)
  },
  async updateProduct({ commit, state }, product) {
    const { data } = await this.$axios.$put(`products/${product.id}`, product)
    commit('UPDATE_PRODUCT', data)
  },
  async deleteProduct({ commit, state }, id) {
    await this.$axios.$delete(`products/${id}`)
    commit('DELETE_PRODUCT', id)
  }
}

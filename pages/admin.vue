<template>
  <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
    <div class="container mx-auto px-6 py-8">
      <h1 class="title-font font-medium text-3xl text-gray-900">
        Dashboard
      </h1>
      <!-- Icon handling can get better :)  -->
      <div class="mt-4">
        <div class="flex flex-wrap -mx-6 text-indigo-900">
          <LazyChart
            :chart="{
              number: products ? products.length : 0,
              description: 'Products'
            }"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M23 6.066v12.065l-11.001 5.869-11-5.869v-12.131l11-6 11.001 6.066zm-21.001 11.465l9.5 5.069v-10.57l-9.5-4.946v10.447zm20.001-10.388l-9.501 4.889v10.568l9.501-5.069v-10.388zm-5.52 1.716l-9.534-4.964-4.349 2.373 9.404 4.896 4.479-2.305zm-8.476-5.541l9.565 4.98 3.832-1.972-9.405-5.185-3.992 2.177z"
              />
            </svg>
          </LazyChart>
          <LazyChart :chart="{ number: 5, description: 'Users' }">
            <svg fill="currentColor" viewBox="0 0 20 20" width="24" height="24">
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              ></path>
            </svg>
          </LazyChart>
          <LazyChart :chart="{ number: 5, description: 'Users' }">
            <svg fill="currentColor" viewBox="0 0 20 20" width="24" height="24">
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              ></path>
            </svg>
          </LazyChart>
        </div>
      </div>
      <div class="mt-8"></div>

      <div class="flex items-center justify-between">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Products
        </h1>
        <button
          class="text-md font-medium bg-green-100 py-4 px-5 rounded-lg text-green-500 hover:text-green-700 align-middle flex"
          @click="openCreateModal"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            width="24"
            height="24"
            class="mx-2"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Add New Product
        </button>
      </div>
      <keep-alive>
        <div v-if="products" class="flex flex-col mt-8">
          <div
            class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            <div
              class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
            >
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Image
                    </th>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white">
                  <LazyProductRow
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    @edit="openEditModal"
                    @delete="deleteProduct"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </keep-alive>

      <LazyModal
        ref="modal"
        :title="editingTitle ? editingTitle : 'Create New Product'"
      >
        <form
          ref="HTMLForm"
          class="w-full text-left"
          @keydown="form.errors.clear($event.target.name)"
        >
          <div
            class="border border-dashed border-gray-500 cursor-pointer mb-5"
            @click.prevent="$refs.file.click()"
          >
            <div class="text-center p-10  top-0 right-0 left-0 m-auto">
              <h4>
                {{
                  selectedFile ? selectedFile.name : 'Click to upload an image'
                }}
              </h4>
            </div>
          </div>
          <input
            ref="file"
            type="file"
            class="hidden"
            name="main_image"
            @change="onFileChanged"
          />

          <div v-for="field in form.fields" :key="field.name" class="w-full">
            <LazyBaseInput
              v-model="field.value"
              :show-label="field.showLabel || false"
              :name="field.name"
              :label="field.label"
              :type="field.type"
              :error="form.errors.get(field.name)"
              @blur="form.validate(field)"
            />
          </div>
          <button
            :class="{ 'opacity-50 cursor-not-allowed': !form.isValid() }"
            :disabled="!form.isValid()"
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg font-bold tracking-wide"
            @click.prevent="createOrUpdateProduct"
          >
            {{ editingTitle ? 'Update Product' : 'Create Product' }}
          </button>
        </form>
      </LazyModal>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import productForm from '~/helpers/forms/productForm'
import Form from '~/helpers/Form'

export default {
  name: 'Admin',
  middleware: 'auth',
  async asyncData({ store }) {
    await store.dispatch('product/fetchProducts')
  },
  data() {
    return {
      selectedFile: null,
      editingTitle: '',
      form: new Form(productForm, this.$axios)
    }
  },
  computed: {
    /**
     * Maps the products from the store.
     * This way we keep all of the mutations in the vuex module & get the latest data.
     */
    ...mapGetters({
      products: 'product/products'
    })
  },

  methods: {
    /**
     * Fired when user clicks on edit button.
     * Resets the form data then fill the new product data & open dialog.
     * @param {object} product
     */
    openEditModal(product) {
      this.form.reset()
      this.clearFile()
      this.editingTitle = `Update ${product.name}`
      this.$refs.modal.open()
      this.form.fill(product)
    },
    /**
     * Fired when user clicks on Add new product button.
     * Resets the form data, set create mode & open dialog.
     */
    openCreateModal() {
      this.form.reset()
      this.clearFile()
      this.editingTitle = null
      this.$refs.modal.open()
    },

    /**
     * Fired when user clicks on the dialog button.
     * Checks if the user is editing or creating then maps to the appropriate function.
     */
    createOrUpdateProduct() {
      if (this.editingTitle) this.update()
      else this.create()
      this.$refs.modal.close()
    },

    /**
     * Creates a product by dispatching vuex action.
     */
    create() {
      const formData = new FormData(this.$refs.HTMLForm)
      this.$store.dispatch('product/createProduct', formData)
    },

    /**
     * Updates a product by dispatching vuex action.
     */
    update() {
      const formData = new FormData(this.$refs.HTMLForm)
      this.$store.dispatch('product/updateProduct', formData)
    },

    /**
     * Deletes a product by dispatching vuex action.
     */
    deleteProduct(product) {
      if (!confirm(`Are you sure you want to delete ${product.name}?`)) return
      this.$store.dispatch('product/deleteProduct', product.id)
    },

    /**
     * Clears the file input.
     */
    clearFile() {
      this.$refs.file.value = null
      this.selectedFile = null
    },

    /**
     * Updates the selected file from form.
     */
    onFileChanged(event) {
      if (!event.target.files[0]) return
      this.selectedFile = event.target.files[0]
    }
  }
}
</script>

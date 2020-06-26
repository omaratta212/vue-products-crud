<template>
  <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
    <div class="container mx-auto px-6 py-8">
      <h1 class="title-font font-medium text-3xl text-gray-900">
        Dashboard
      </h1>
      <!-- Icon handling can get better :)  -->
      <div class="mt-4">
        <div class="flex flex-wrap -mx-6 text-indigo-900">
          <LazyChart :chart="{ number: 55, description: 'Orders' }">
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
        <div v-if="products.length" class="flex flex-col mt-8">
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
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </keep-alive>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Admin',
  middleware: 'auth',
  data() {
    return {
      products: [
        {
          id: '1',
          name: 'some product',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80',
          price: '60',
          description: 'asdadjhask djs dhjlsh djh jlh'
        },
        {
          id: '2',
          name: 'some product',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80',
          price: '60',
          description: 'asdadjhask djs dhjlsh djh jlh'
        },
        {
          id: '3',
          name: 'some product',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80',
          price: '60',
          description: 'asdadjhask djs dhjlsh djh jlh'
        },
        {
          id: '4',
          name: 'some product',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80',
          price: '60',
          description: 'asdadjhask djs dhjlsh djh jlh'
        }
      ]
    }
  }
}
</script>

<style scoped></style>

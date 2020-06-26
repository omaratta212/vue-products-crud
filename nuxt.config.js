export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   *  https://nuxtjs.org/api/configuration-loading/
   */
  loading: { color: '#fff', height: '10px' },

  /*
   ** Customize vue-router config
   *  https://nuxtjs.org/api/configuration-router/
   */
  router: {
    middleware: ['auth']
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt/components
    '@nuxt/components'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://dev.auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: true,
    mode: 'server',
    prefix: 'http://localhost:8000/api',
    proxy: true
  },
  proxy: {
    '/laravel': {
      target: 'http://localhost:8000',
      pathRewrite: { '^/laravel': '/' }
    }
  },

  /*
   ** Auth module configuration
   ** See https://dev.auth.nuxtjs.org/
   */
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/admin'
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000/api',
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get' }
        }
      }
    }
  },

  /*
   ** Nuxt Components
   * Doc: https://github.com/nuxt/components
   */
  components: true,

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  /*
   ** API: The vue.config Property
   *  https://nuxtjs.org/api/configuration-vue-config/
   */
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  /*
   ** Page transition config
   *  https://nuxtjs.org/api/pages-transition
   */
  pageTransition: {
    mode: 'out-in'
  },

  /*
   ** The loading indicator config
   *  https://nuxtjs.org/api/configuration-loading-indicator/
   */
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  }
}

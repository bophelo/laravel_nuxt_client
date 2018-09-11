module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Laravel API + Nuxt Client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Laravel API + NuxtJs Client' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  plugins: [
    './plugins/mixins/user',
    './plugins/axios',
    './plugins/mixins/validation'
  ],

  axios: {
    baseURL: 'http://localhost:8000/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'login',
            method: 'post',
            propertyName: 'meta.original.access_token'
          },
          user: {
            url: 'me',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: 'logout',
            method: 'post'
          }
        },
      },
    },
    redirect: {
          login: '/auth/signin',
          home: '/dashboard'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}


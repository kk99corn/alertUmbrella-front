import bodyParser from 'body-parser'
import session from 'express-session'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'alertUmbrella',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/cover.css',
    '@/assets/css/alertUmbrella.css',
    '@/assets/css/bootstrap-select.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api/v1/': {
      target: 'http://127.0.0.1:8080/api/v1',
      pathRewrite: {
        '^/api/v1/': '/'
      }
    }
  },
  // // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: '/',
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // env config
  env: {
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080'
  },
  // router: {
  //   middleware: 'auth'
  // },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'super-secret-key',
      saveUninitialized: false,
      cookie: { maxAge: 0 }
    }),
    '~/apis'
  ]
}

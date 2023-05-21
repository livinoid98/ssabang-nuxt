module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ssabang',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'make ssabang with nuxt.js and springboot in ssafy' },
      { name: 'google-site-verification', content: 'iLarRP0AHOAX-RBl7ayP9nb9PI0lhBoklH7jZHWmaK4'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: [
      '@/assets/styles/reset.css',
      {src: '@/assets/styles/layout.scss', lang: 'scss'},
      {src: '@/assets/styles/function.scss', lang: 'scss'},
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-PV6HKG7VYW",
        async: true,
      },
      {src: "/js/analytics.js"},
      {
        src: "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6452f1ea135bf01fcf76db4e5eb67011&libraries=services,clusterer,drawing",
      },
    ]
  },
  modules:[
    "@nuxtjs/axios",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  buildmodules:[
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics:{
    id: "G-PV6HKG7VYW",
    debug: {
      enabled: true,
      sendHitTask: true,
    },
  },
  sitemap: {
    hostname: 'https://ssabang.vercel.app',
    gzip: true,
    path: '/sitemap.xml',
    exclude: [
      '/admin/**'
    ],
    routes: [
    ],
  },
  robots:{
    UserAgent: '*',
    Disallow: '/admin',
    Allow: '/',
  },
  plugins: [
    {
      src: '~plugins/persistedState.js',
    }
  ],
  axios:{
    host: "http://127.0.0.1",
    port: "8080",
    prefix: "/",
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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


export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/i18n", "@nuxtjs/color-mode"],

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en",
        file: "en.js",
      },
      {
        code: "pl",
        name: "Polski",
        iso: "pl",
        file: "pl.js",
      },
    ],
    langDir: "locales/",
    defaultLocale: "pl",
    vueI18n: {
      fallbackLocale: "en",
      // messages: {
      //   en: require("./locales/en.json"),
      //   pl: require("./locales/pl.json"),
      // },
    },
  },
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: ["@assets/main.scss"],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: [],
};

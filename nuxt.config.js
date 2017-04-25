module.exports = {
  loading: false,
  head: {
    htmlAttrs: {lang: 'en'},
    meta: [
      {name: 'viewport', content: 'initial-scale=1'},
    ],
  },
  css: [
    'normalize.css',
    {src: '~assets/base.styl', lang: 'stylus'},
  ],
};

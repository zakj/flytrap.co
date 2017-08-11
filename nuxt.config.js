module.exports = {
  css: [
    'normalize.css',
    {src: '~assets/base.styl', lang: 'stylus'},
  ],
  generate: {
    minify: {conservativeCollapse: true},
  },
  head: {
    htmlAttrs: {lang: 'en'},
    meta: [
      {name: 'charset', content: 'utf-8'},
      {name: 'viewport', content: 'initial-scale=1'},
    ],
  },
  loading: false,
};

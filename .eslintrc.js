module.exports = {
  root: true,

  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue-pug/vue3-recommended",
  ],

  rules: {
    "vue/multi-word-component-names": "off",
  },
};

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://oneio.app',
    env: {
      titleText: "ONEiO"
    }
  },
});

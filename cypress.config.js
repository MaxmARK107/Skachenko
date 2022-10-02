const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 768,
    viewportWidth: 1900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

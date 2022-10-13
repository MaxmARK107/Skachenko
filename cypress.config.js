const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} = require ('cypress-image-snapshot/plugin');
module.exports = defineConfig({
  e2e: {
    viewportHeight: 768,
    viewportWidth: 1900,
    setupNodeEvents(on, config) {
    addMatchImageSnapshotPlugin(on, config);
    },
  },
});

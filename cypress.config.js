const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} = require ('cypress-image-snapshot/plugin');
module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
    addMatchImageSnapshotPlugin(on, config);
    },
    excludeSpecPattern: ['**/cypress/e2e/1-getting-started', '**/cypress/e2e/2-advanced-examples'],
    baseUrl: 'https://www.maxon.net/',
    defaultCommandTimeout: 2000,
    retries: 0,
    redirectionLimit: 3,
    watchForFileChanges: true,
    pageLoadTimeout: 10000,
    responseTimeout: 2000,
    screenshotOnRunFailure: false,
    slowTestThreshold: 10000,
    
  },
});

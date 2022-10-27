const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} = require ('cypress-image-snapshot/plugin');
module.exports = defineConfig({
  e2e: {
    viewportHeight: 768,
    viewportWidth: 1900,
    setupNodeEvents(on, config) {
    addMatchImageSnapshotPlugin(on, config);
    },
    excludeSpecPattern: ['**/cypress/e2e/1-getting-started', '**/cypress/e2e/2-advanced-examples'],
    baseUrl: 'https://www.beaxy.com',
    defaultCommandTimeout: 2000,
    retries: 1,
    redirectionLimit: 2,
    watchForFileChanges: true,
    pageLoadTimeout: 8000,
    responseTimeout: 2000,
    screenshotOnRunFailure: false,
    slowTestThreshold: 10000,
    
  },
});

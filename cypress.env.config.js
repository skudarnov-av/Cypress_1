const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 360,
  e2e: {
    baseUrl: "http://localhost:3000",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {},
    },
});
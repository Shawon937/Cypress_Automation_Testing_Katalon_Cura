const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      config.specPattern =[
        'cypress/e2e/login.cy.js',
        'cypress/e2e/makeAppointment.cy.js'
      ]
      return config;
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://clientes.test.aws.consumer.strix.com.ar/',
    env: {
      username: 'miUsuario',
      password: 'miContraseña',
      apiUrl: 'https://api.tusitio.com'
    },
    setupNodeEvents(on, config) {
    },
  },
  video: true, // Activa grabación de video
  videoCompression: 32, // Nivel de compresión
  videosFolder: "cypress/videos", // Carpeta donde se guardan

  screenshotOnRunFailure:true,
  screenshotsFolder:'cypress/screenshots'

});


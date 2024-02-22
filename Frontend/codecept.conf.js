/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://ingsw3frontend-e0243388a7b1.herokuapp.com/',
      show: true,
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'frontend'
}
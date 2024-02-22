/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://ingsw3frontend-e0243388a7b1.herokuapp.com/',
      show: true,
      chromium: {
        executablePath: 'C:\\Users\\Usuario\\AppData\\Local\\Chromium\\Application\\chrome.exe'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'frontend'
}
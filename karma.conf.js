// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular'
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'coverage-istanbul', 'junit'],
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      fixWebpackSourcePaths: true
    },
    junitReporter: {
      useBrowserName: false,
      outputDir: 'coverage',
      outputFile: 'junit.xml'
    },
    port: 9876,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    colors: true,
    autoWatch: false,
    singleRun: true,
    restartOnFileChange: false,
    browserDisconnectTolerance: 3,
    captureTimeout: 30000,
    browserDisconnectTimeout: 30000,
    browserNoActivityTimeout: 30000
  });
};

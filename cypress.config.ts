import { defineConfig } from 'cypress'

export default defineConfig({

  projectId: "4jods3",

  e2e: {
    'baseUrl': 'https://lorbus.github.io/demo-ui'
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})

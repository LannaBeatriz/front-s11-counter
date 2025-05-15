import React from 'react'
import App from './App'

describe('Testing App Component', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })

  it('Counts one', () => {
    cy.get('#counterButton').click()
  })
})
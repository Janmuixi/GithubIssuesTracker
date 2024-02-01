/// <reference types="cypress" />
context('go to issue', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('click on an issue and get routed to that issue', () => {
      cy.intercept('GET', '**/issue?*').as('getIssue')
  
      cy.get("[data-testid='issue-item-0']").click()
  
      cy.wait('@getIssue').its('response.statusCode').should('be.oneOf', [200, 304])
    })
  })
  
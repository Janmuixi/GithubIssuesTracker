describe('searchbar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('can type', () => {
    cy.get("[data-testid='searchbar-input']").clear().type('react').should('have.value', 'react')
  })
  it('can clear', () => {
    cy.get("[data-testid='searchbar-input']").clear().type('react')
    cy.get("[data-testid='searchbar-close']").click()
    cy.get("[data-testid='searchbar-input']").should('have.value', '')
  })
  it('changes status', () => {
    cy.get("[data-testid='searchbar-swap']").should('not.have.class', 'closed')
    cy.get("[data-testid='searchbar-swap']").click()
    cy.get("[data-testid='searchbar-swap']").should('have.class', 'closed')
  })
})
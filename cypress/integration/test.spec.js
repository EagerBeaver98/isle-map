/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */

describe('Loads page', () => {
  it('Brings up main page', () => {
    cy.visit('localhost:3000');
  });
  it('Loads footer', () => {
    cy.get('footer').should('exist');
  });
});
describe('Coordinate Conditional Checks', () => {
  it('Does not load coords before click', () => {
    cy.get('.coords').should('not.exist');
  });
  it('Loads coords after click', () => {
    cy.get("[alt='map']").click();
    cy.get('.coords').should('exist');
  })
})
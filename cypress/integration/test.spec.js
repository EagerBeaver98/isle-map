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
  it('Does not load coords before hover', () => {
    cy.get('.coords').should('not.exist');
  });
  it('Loads coords after hover', () => {
    cy.get("[alt='map']").trigger('mouseover');
    cy.get('.coords').should('exist');
  })
})
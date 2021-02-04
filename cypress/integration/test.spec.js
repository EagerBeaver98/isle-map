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
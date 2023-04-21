import { routes } from './constants';

describe('Simple math operations', () => {
  const calcRoutes = [routes.root, routes.homeCC];
  for (let calc of calcRoutes) {
    beforeEach(() => {
      cy.visit(calc);
    });
    it('properly counts addition', () => {
      cy.get('[data-testid="1"]').click();
      cy.get('[data-testid="+"]').click();
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="result"]').should('have.text', '3');
    });
    it('properly counts subtraction', () => {
      cy.get('[data-testid="5"]').click();
      cy.get('[data-testid="-"]').click();
      cy.get('[data-testid="3"]').click();
      cy.get('[data-testid="result"]').should('have.text', '2');
    });
    it('properly counts multiplication', () => {
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="*"]').click();
      cy.get('[data-testid="3"]').click();
      cy.get('[data-testid="result"]').should('have.text', '6');
    });
    it('properly counts division', () => {
      cy.get('[data-testid="9"]').click();
      cy.get('[data-testid="/"]').click();
      cy.get('[data-testid="3"]').click();
      cy.get('[data-testid="result"]').should('have.text', '3');
    });
    it('properly counts modulus', () => {
      cy.get('[data-testid="9"]').click();
      cy.get('[data-testid="%"]').click();
      cy.get('[data-testid="3"]').click();
      cy.get('[data-testid="result"]').should('have.text', '0');
    });
  }
});

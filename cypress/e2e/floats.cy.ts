import { routes } from './constants';

describe('Float numbers', () => {
  const calcRoutes = [routes.root, routes.homeCC];
  for (let calc of calcRoutes) {
    beforeEach(() => {
      cy.visit(calc);
    });
    it('properly handles floats with zero (0.2)', () => {
      cy.get('[data-testid="0"]').click();
      cy.get('[data-testid="."]').click();
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="+"]').click();
      cy.get('[data-testid="0"]').click();
      cy.get('[data-testid="."]').click();
      cy.get('[data-testid="1"]').click();
      cy.get('[data-testid="result"]').should('have.text', '0.3');
    });
    it('properly handles floats starting with a dot (.2)', () => {
      cy.get('[data-testid="."]').click();
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="+"]').click();
      cy.get('[data-testid="."]').click();
      cy.get('[data-testid="1"]').click();
      cy.get('[data-testid="result"]').should('have.text', '0.3');
    });
  }
});

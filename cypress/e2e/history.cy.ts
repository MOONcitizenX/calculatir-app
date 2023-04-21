import { routes } from './constants';

describe('History', () => {
  const calcRoutes = [routes.root, routes.homeCC];
  for (let calc of calcRoutes) {
    it('writes expressions with result to history', () => {
      cy.visit(calc);

      cy.get('[data-testid="1"]').click();
      cy.get('[data-testid="+"]').click();
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="*"]').click();
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="="]').click();
      cy.get('[data-testid="toggle-history"]').click();
      cy.contains('1 + 2 * 2 = 5').should('exist');
    });
  }

  for (let calc of calcRoutes) {
    it('clears history and display on "Clear history" button click', () => {
      cy.visit(calc);

      cy.get('[data-testid="1"]').click();
      cy.get('[data-testid="+"]').click();
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="*"]').click();
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="="]').click();
      cy.visit(routes.settingsCC);
      cy.get('[data-testid="clear-history"]').click();
      cy.visit(calc);
      cy.get('[data-testid="expression"]').should('have.text', '0');
      cy.get('[data-testid="result"]').should('have.text', '0');
    });
  }
});

import { routes } from './constants';

describe('Operations priorities', () => {
  const calcRoutes = [routes.root, routes.homeCC];
  for (let calc of calcRoutes) {
    beforeEach(() => {
      cy.visit(calc);
    });
    it('properly handles operation priority', () => {
      cy.get('[data-testid="1"]').click();
      cy.get('[data-testid="+"]').click();
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="*"]').click();
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="result"]').should('have.text', '5');
    });
  }
});

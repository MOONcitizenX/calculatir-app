import { routes } from './constants';

describe('Brackets', () => {
  const calcRoutes = [routes.root, routes.homeCC];
  for (let calc of calcRoutes) {
    beforeEach(() => {
      cy.visit(calc);
    });
    it('properly handles brackets', () => {
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="*"]').click();
      cy.get('[data-testid="("]').click();
      cy.get('[data-testid="5"]').click();
      cy.get('[data-testid="-"]').click();
      cy.get('[data-testid="3"]').click();
      cy.get('[data-testid=")"]').click();
      cy.get('[data-testid="result"]').should('have.text', '4');
    });
  }
});

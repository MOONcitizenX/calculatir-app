import { routes, primaryBGColors } from './constants';

describe('Theme switch', () => {
  const settingsRoutes = [routes.settingsFC, routes.settingsCC];

  for (let settingPage of settingsRoutes) {
    it('switches themes', () => {
      cy.visit(settingPage);
      cy.get('[data-testid="calculator"]').should(
        'have.css',
        'background-color',
        `${primaryBGColors.light}`
      );
      cy.get('[data-testid="dark-theme-switch"]').click();
      cy.get('[data-testid="calculator"]').should(
        'have.css',
        'background-color',
        `${primaryBGColors.dark}`
      );
      cy.get('[data-testid="colored-theme-switch"]').click();
      cy.get('[data-testid="calculator"]').should(
        'have.css',
        'background-color',
        `${primaryBGColors.colored}`
      );
      cy.get('[data-testid="light-theme-switch"]').click();
      cy.get('[data-testid="calculator"]').should(
        'have.css',
        'background-color',
        `${primaryBGColors.light}`
      );
    });
  }
});

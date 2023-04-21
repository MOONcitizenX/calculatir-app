import { routes } from './constants';

describe('Routing', () => {
  it('renders home page FC', () => {
    cy.visit(routes.root);
    cy.contains('HomeFC').should('have.class', 'active');
  });
  it('renders home page CC', () => {
    cy.visit(routes.homeCC);
    cy.contains('HomeCC').should('have.class', 'active');
  });
  it('renders settings page FC', () => {
    cy.visit(routes.settingsFC);
    cy.contains('SettingsFC').should('have.class', 'active');
  });
  it('renders settings page CC', () => {
    cy.visit(routes.settingsCC);
    cy.contains('SettingsCC').should('have.class', 'active');
  });
  it('renders error fallback element on unknown routes', () => {
    cy.visit('/asdasdasd');
    cy.contains('Oops').should('exist');
  });
});

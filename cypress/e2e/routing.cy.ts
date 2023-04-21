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

describe('Navigating', () => {
  const baseUrl = Cypress.config().baseUrl!;
  beforeEach(() => {
    cy.visit(routes.root);
  });
  it('navigates to home page FC', () => {
    cy.visit(routes.settingsFC);
    cy.contains('HomeFC').click();
    cy.url().should('equal', new URL(routes.root, baseUrl).toString());
  });
  it('navigates to home page CC', () => {
    cy.contains('HomeCC').click();
    cy.url().should('equal', new URL(routes.homeCC, baseUrl).toString());
  });
  it('navigates to settings page FC', () => {
    cy.contains('SettingsFC').click();
    cy.url().should('equal', new URL(routes.settingsFC, baseUrl).toString());
  });
  it('navigates to settings page CC', () => {
    cy.contains('SettingsCC').click();
    cy.url().should('equal', new URL(routes.settingsCC, baseUrl).toString());
  });
});

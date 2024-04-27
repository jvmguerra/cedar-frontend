describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('loads the homepage and displays the logo and form', () => {
    cy.get('img[alt="Cedar Logo"]').should('be.visible');
    cy.contains('Sign in to your account').should('be.visible');
  });

  it('allows a user to type an email and password', () => {
    cy.get('#email').type('user@example.com');
    cy.get('#password').type('password123');
    cy.get('button').contains('Sign in').should('not.be.disabled');
  });

  it('submits the form and navigates to the welcome page on successful login', () => {
    cy.get('#email').type('user1@cedar.com');
    cy.get('#password').type('password123');
    cy.get('button').contains('Sign in').click();
    cy.url().should('include', '/welcome');
  });

  it('shows an error message on invalid login', () => {
    cy.get('#email').type('wrong@example.com');
    cy.get('#password').type('wrongpassword');
    cy.get('button').contains('Sign in').click();
    cy.get('p').contains('Email is incorrect').should('be.visible');
    cy.get('p').contains('Password is incorrect').should('be.visible');
  });
});
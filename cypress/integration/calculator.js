
//visit link before each test case

describe('Auto Loan Calculator page', function() {
  beforeEach(function() {
    cy.visit('/calculators/auto/auto-loan-calculator.aspx')
  });

//due to console error need this

    Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

//How much are you looking to borrow tests

it('input positive amount', function() {
    cy.get('input[name="amount"]')
    .type('1000{enter}')
    .should('have.value', '1,000')

    cy.get('.calculator__total-paid').contains('1,000')
  });

  it('input 0 for borrow', function() {
      cy.get('input[name="amount"]')
      .type('0{enter}')
    //  .should('have.value', '-1000')
    //  cy.contains('.error-message')
    cy.get('.form-input.\--has-error .error-message')
  });

    it('input negative for borrow', function() {
        cy.get('input[name="amount"]')
        .type('-1{enter}')
      cy.get('.form-input.\--has-error .error-message')
    });

    it('input amount less than 1000 for borrow', function() {
        cy.get('input[name="amount"]')
        .type('99{enter}')
      cy.get('.form-input.\--has-error .error-message')
    });

    //For How long, Used test cases

  it('switch from 60 months to 36 months', function() {
    cy.get('.br-dropdown').contains('60 months').click()
    cy.contains('36').click()
  });

    it('switch to 48 months', function() {
      cy.get('.br-dropdown').contains('60 months').click()
      cy.contains('48').click()
    });

//switch from used to new test cases

    it('Is your vehicle new or used?', function() {
        cy.get('.br-dropdown').contains('used').click()
      });

//changing dropdown values

      it('Selecting borrow amount for new', function() {
          cy.get('.dropdown__selected').contains('Used').click()
          cy.get('.dropdown__list-container').contains('New').click()
          cy.get('.br-dropdown').contains('60 months').click()
          cy.contains('72').click()
        });
//interest rate test cases

      it('input positive interest rate', function() {
          cy.get('input[name="interest-rate"]')
          .type('4')
          .should('have.value', '4')
        });

    it('input negative interest rate', function() {
        cy.get('input[name="interest-rate"]')
        .type('-2{enter}')
        .should('have.value', '-2')
        cy.get('.interest-input__error')
        .should('contain', 'Invalid rate')
      });

//tooltips
        it('Verify tool tips', function() {
          cy.get('.tool-tip').first().click()
          cy.get('.tool-tip').eq(1).click()
        });

//loan rates link
          it('Compare Loan Rates', function() {
            cy.get('.optimizely__view-rates').click()
            cy.url().should('include', '/loans/auto-loans/rates/')
          });

//Amortization link

            it('Amortization schedule', function() {
              cy.get('.calculator__amortization-link').click()
              cy.contains('Hide amortization schedule').should('be.visible')
              cy.contains('Amortization Schedule').should('be.visible')
            });


              it('Verify tool tips', function() {
                cy.get('.tool-tip').first().click()
                cy.get('.tool-tip').eq(1).click()
              });

              it('Find a rate', function() {
                cy.get('.br-dropdown').contains('Find a rate').click()
              //  cy.contains('Choose an available rate from a lender below').click({ force: true })
              });

//interest negative failed case

      it('input negative interest rate', function() {
          cy.get('input[name="interest-rate"]')
          .type('-3{enter}')
          .should('have.value', '-3')
  cy.get('.interest-input__error')
          .should('contain', 'Invalid rate')
        });


});

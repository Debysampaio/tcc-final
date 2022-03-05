// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('produtos', (produto,tamanho, cor) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="products products-grid"]')
        .contains(produto)
        .click()
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.single_add_to_cart_button').click() 

});

Cypress.Commands.add('cadastrarCupon',(nomeCupom, amount, fixedProduct, description)=>{
    cy.request({
        method: 'POST',
        url: 'wp-json/wc/v3/coupons', 
        body: {
            "code": nomeCupom,
            "amount": amount,
            "discount_type": fixedProduct,
            "description": description
        }, 
        auth: {
            username: 'admin_ebac',
            password: '@admin!&b@c!2022'
          },
        
        failOnStatusCode: false
        
    })
})

Cypress.Commands.add('limparCarrinho', () => {
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('[data-product_id="2559"]').eq(1).click()
    cy.get('.breadcrumb').click()
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('[data-product_id="3111"]').eq(1).click()
    cy.get('.breadcrumb').click()
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('[data-product_id="3374"]').eq(1).click()
});
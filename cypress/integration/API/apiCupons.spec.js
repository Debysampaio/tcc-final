/// <reference types = "cypress"/>
const faker = require('faker-br');


describe('Teste funcionalidade de produtos', () => {

    it('Listar Cupons', () => {
        cy.request({
            method: 'GET',
            url: 'wp-json/wc/v3/coupons',
            auth: {
                username: 'admin_ebac',
                password: '@admin!&b@c!2022'
              }
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    });

    it('Cadastrar Cupon', () => {
        let cupom = faker.commerce.productName()
        cy.cadastrarCupon(cupom, '15.00', 'fixed_product', 'Cupom Automação' )
        .then((response) => {
            expect(response.status).to.equal(201)
    })
})
})
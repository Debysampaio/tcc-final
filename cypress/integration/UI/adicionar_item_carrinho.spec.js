/// <reference types="cypress" />


context('Adicionar itens ao carrinho', () => {

    beforeEach(() => {
        //acessar a minha conta
        cy.visit('minha-conta')
        // Realizar login com os dados da fixture perfil, e metodos do comando login
        cy.fixture('login').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });


    it('Deve adicionar itens ao carrinho', () => {
        var produto1 = 'Abominable Hoodie'
        var produto2 = 'Apollo Running Short'
        var produto3 = 'Aether Gym Pant'
        //Adiconar itens ao carrinho
        cy.produtos(produto1,'L', 'Green')
        cy.produtos(produto2,'36', 'Black')
        cy.produtos(produto3,'34', 'Brown')

        // Validando a quantidade de itens no carrinho
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
        //acesaando o carrinho
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        //verificando os itens adicionados ao carrinho
        cy.get(':nth-child(1) > .product-name > a').should('contain', produto1)
        cy.get(':nth-child(2) > .product-name > a').should('contain', produto2)
        cy.get(':nth-child(3) > .product-name > a').should('contain', produto3)
        //limpando o carrinho
        cy.limparCarrinho()
    });


})
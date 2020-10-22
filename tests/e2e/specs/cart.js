    // Verifique que sea posible "Añadir productos a un carrito de compra y ver el carrito

    describe('Login',()=>{
        it('añade productos al carrito y se puede ver el carrito',()=>{
            cy.visit('/')
            cy.get('.navbar-burger > :nth-child(2)').click()
            cy.get('input').type('Casa')
            cy.get('.mdi.mdi-plus').click()
            cy.get('.button.is-pulled-right.is-warning').click()
            cy.get('.navbar-burger > :nth-child(3)').click()
            cy.get('.mdi.mdi-32px.mdi-cart').click()
        })
    
        it('elimina productos del carrito',()=>{
            cy.visit('/')
            cy.get('.navbar-burger > :nth-child(2)').click()
            cy.get('input').type('casa')
            cy.get('.mdi.mdi-plus').click()
            cy.get('.button.is-pulled-right.is-warning').click()
            cy.get('.navbar-burger > :nth-child(3)').click()
            cy.get('.mdi.mdi-32px.mdi-cart').click()
            cy.get('.mdi.mdi-18px.mdi-delete').click()
        })
        })
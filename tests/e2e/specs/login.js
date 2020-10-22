//Verifique la funcionalidad de "Iniciar sesión con mail y contraseña"

//Redirecciona a home ('/') si usuario se loguea correctamente

describe('Login',()=>{
    it('redireccionar a home cuando usuario se loguea', ()=>{
        cy.visit('/login')
        cy.get('.navbar-burger > :nth-child(2)').click()
        cy.get('#email').type('user1@mystore.com')
        cy.get('#password').type('password')
        cy.get('.button').click()

        cy.location().should((loc)=>{
            expect(loc.pathname).to.eq('/')
        })
    })

    //Verifica que muestre alerta al ingresar credenciales erroneas

})
//Verifique la funcionalidad "Buscar productos por nombre"
describe('Login',()=>{
    it('buscar productos por nombre', ()=>{
        cy.visit('/')
        cy.get('.navbar-burger > :nth-child(2)').click()
        cy.get('input').type('Casa')
        })
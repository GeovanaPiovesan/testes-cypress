describe('Testes de API - ServeRest', () => {

  it('Deve listar os usuários cadastrados com sucesso através do back-end', () => {

    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((response) => {

      expect(response.status).to.eq(200)
      
      expect(response.body).to.have.property('usuarios')
      
      expect(response.body.quantidade).to.be.greaterThan(0)
    })
  })

  it('Deve impedir o cadastro de um usuário com e-mail duplicado', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false, 
      body: {
        nome: "Fulano da Silva",
        email: "fulano@qa.com", 
        password: "teste",
        administrador: "true"
      }
    }).then((response) => {
     
      expect(response.status).to.eq(400)
      
      expect(response.body.message).to.eq('Este email já está sendo usado')
    })
  })

})
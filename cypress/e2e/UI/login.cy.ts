import UsuarioFactory from '../../support/factories/usuario.factory'

describe('Testes de API - Usuários ServeRest', () => {

  // Cenário 1: GET (O que fizemos antes)
  it('Deve listar os usuários cadastrados com sucesso', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('usuarios')
      expect(response.body.quantidade).to.be.greaterThan(0)
    })
  })

  // Cenário 2: POST usando a Factory (O novo cenário)
  it('Deve cadastrar um usuário com sucesso gerando dados dinâmicos', () => {
    const usuarioDinamico = UsuarioFactory.criarUsuarioAleatorio()

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: usuarioDinamico 
    }).then((response) => {
      expect(response.status).to.eq(201) 
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })

})
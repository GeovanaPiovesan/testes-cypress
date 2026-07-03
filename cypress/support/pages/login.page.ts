class LoginPage {
    
    get inputEmail() { return cy.get('[data-testid="email"]') }
    get inputSenha() { return cy.get('[data-testid="senha"]') }
    get btnEntrar() { return cy.get('[data-testid="entrar"]') }
    get tituloBemVindo() { return cy.get('h1') }

    acessarPagina() {
        cy.visit('https://front.serverest.dev/login')
    }

    realizarLogin(email: string, senha: string) {
        this.inputEmail.type(email)
        this.inputSenha.type(senha)
        this.btnEntrar.click()
    }
}

export default new LoginPage()
import { faker } from '@faker-js/faker'

export default class UsuarioFactory {
    
    static criarUsuarioAleatorio() {
        return {
            nome: faker.person.fullName(),       
            email: faker.internet.email(),       
            password: faker.internet.password(),
            administrador: 'true'                
        }
    }

}
/// <reference types="cypress" />
import { login } from '../../services/login'
describe('Should login to the platform and validate all existing items', () => { 

    before('should login to the platform', () => {
        login()
    })
it('First Test', () => {
    
});
 })
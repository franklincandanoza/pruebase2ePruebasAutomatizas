import {Login} from "./pages/login"
const login = new Login()



import {Screenshot} from '../Utilities/screenshots'
const screenshot = new Screenshot()


import {Tag} from "./pages/tag"
const tag = new Tag(screenshot)

describe('Create tag', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))

        cy.wait(2000)
    })

    it.only('Test to create tag failed when the form does not have all mandatory fields (tag name)', () => {
        screenshot.case('Test to create tag failed when the form does not have all mandatory fields (tag name)')
        // Redirect to create member form
        tag.navigate_to_tags_list()

        cy.wait(2000)

        tag.click_to_create_new_tag()

        cy.wait(2000)

        var tagSlug =  'tagslug'
        var tagDescription = 'Esta es la descripción del nuevo tag'

        tag.create_tag('tag name', tagSlug, tagDescription, 'trtrsw')

        // Assertions
        tag.validateMessageWhenTagColorIsWrong()
        
        cy.url().should('eq', cy.config('baseUrl')+'/#/tags/new')

    })

})
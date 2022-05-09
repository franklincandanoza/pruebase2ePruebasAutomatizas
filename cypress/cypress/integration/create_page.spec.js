import {Login} from "../pages/login"
const login = new Login()

import {Page} from "../pages/page"
const page = new Page()

describe('Create page', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))
    })

    it('Test to create page succesfully with mandatory fields', () => {
        
        // Redirect to create member form
        page.navigate_to_pages_list()
        
        page.click_to_create_new_page()
        
        var pageName = Math.random()
        var pageDescription = 'Esta es la nota del nueva pagina: '+pageName

        page.create_page(pageName,  pageDescription, false)    

        page.validate_created_page(pageName, pageDescription)
        
        
    })

    it('Test to create member failed when the form does not have all mandatory fields', () => {

        // Redirect to create page form
        page.navigate_to_pages_list()

        page.click_to_create_new_page()

        page.create_page('', '', false)

        page.open_last_created_page()
        // Assertions
        page.validateMessageWhenAllValueAreMissing()

    })

    it('Test to create page failed when the member`s name exceeds the maximum character limit', () => {
        
        // Redirect to create member form
        page.navigate_to_pages_list()

        page.click_to_create_new_page()
        var pageName = '' +Math.random()
        var pageEmail =  pageName + '@gmail.com'
        page.create_page(pageName.repeat(30), pageEmail, false )

        // Assertions
        page.validateMessageWhenNameFieldExceedsMaximumCharacterLimit()
        
        cy.url().should('eq', cy.config('baseUrl')+'/#/editor/page')

    })

    it('Test to publish a page', () => {

        
        // Redirect to create member form
        page.navigate_to_pages_list()
        
        page.click_to_create_new_page()
        
        var pageName = Math.random()
        var pageDescription = 'Esta es la nota del nueva pagina: '+pageName

        page.create_page(pageName,  pageDescription, true)    

        page.validate_published_page(pageName, pageDescription)

    })
  })
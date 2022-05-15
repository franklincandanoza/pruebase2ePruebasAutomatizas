
import {Screenshot} from './screenshots/screenshots'
const screenshot = new Screenshot()

import {Page} from "./pages/page"
const page = new Page(screenshot)

import {Login} from "./pages/login"
const login = new Login(screenshot)

describe('Create page', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))
    })

    it('Test to publish a page', () => {

        screenshot.case('Test to publish a page')
        // Redirect to create member form
        page.navigate_to_pages_list()
        
        page.click_to_create_new_page()
        
        var pageName = Math.random()
        var pageDescription = 'Esta es la nota del nueva pagina: '+pageName

        page.create_page(pageName,  pageDescription, true) 

        page.validate_published_page(pageName, pageDescription)

    })
  })
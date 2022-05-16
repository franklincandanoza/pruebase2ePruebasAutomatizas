import {Screenshot} from '../Utilities/screenshots'
const screenshot = new Screenshot()

import {Login} from "./pages/login"
const login = new Login()

import {Design} from "./pages/design"
const design = new Design(screenshot)

describe('Chage Design', () => {

    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))
    })

    it('Test to edit color design with bad hex format color', () => {
        
        screenshot.case('Test to edit color design with bad hex format color')
        design.navigate_to_design_section()

        design.click_to_open_brand_menu()

        design.put_accent_color('FU389SK')

        cy.wait(2000)

        design.validate_message_with_invalid_hex_format_color()

            
    })

    it('Test to edit color design with empty hex format color', () => {
        
        screenshot.case('Test to edit color design with empty hex format color')
        design.navigate_to_design_section()

        design.click_to_open_brand_menu()

        design.clear_accent_color()

        cy.wait(2000)

        design.validate_message_with_empty_hex_format_color()

            
    })

    it('Test to edit color design succesfully', () => {
        
        screenshot.case('Test to edit color design succesfully')
        design.navigate_to_design_section()

        design.click_to_open_brand_menu()

        design.put_accent_color('000000')
        
        design.click_to_save_design()

        cy.wait(3000)

        design.navigate_to_main_page()
        
        cy.wait(2000)

        design.navigate_to_design_section()

        design.validate_accent_color('000000')

            
    })


})
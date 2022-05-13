import {Login} from "./pages/login"
const login = new Login()

import {Tag} from "./pages/tag"
const tag = new Tag()

describe('Create tag', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))
    })

    it('Test to create tag succesfully with mandatory fields', () => {
        
        // Redirect to create member form
        tag.navigate_to_tags_list()

        /*
        member.click_to_create_new_member()

        var memberName = Math.random()
        var memberEmail =  memberName + '@gmail.com'
        var memberNote = 'Esta es la nota del nuevo miembro: '+memberName

        member.create_member(memberName, memberEmail, memberNote)

        cy.wait(200)
       
        // Redirect to members list to validate its creation
        member.navigate_to_members_list()

        member.open_last_created_member()

        member.validate_created_member(memberName, memberEmail, memberNote)
        
        */
    })

})
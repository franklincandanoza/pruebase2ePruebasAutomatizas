import {Login} from "./pages/login"
const login = new Login()

import {Member} from "./pages/member"
const member = new Member()

describe('Delete members', () => {
    
    beforeEach(()=>{
        login.login(Cypress.env('user'), Cypress.env('password'))
        cy.screenshot()
    })

    it('Test to delete member succesfully', () => {

        // Redirect to create member form
        member.navigate_to_members_list()
        cy.screenshot()

        member.click_to_create_new_member()
        cy.screenshot()


        var memberName = Math.random()
        var memberEmail =  memberName + '@gmail.com'
        var memberNote = 'Esta es la nota del nuevo miembro: '+memberName
        cy.screenshot()

        member.create_member(memberName, memberEmail, memberNote)

        
        cy.wait(200)
       
        member.navigate_to_members_list()
        cy.screenshot()

        member.open_last_created_member()
        cy.screenshot()

        member.validate_created_member(memberName, memberEmail, memberNote)

        // Delete member
        member.clickDeleteMember()
        
        
        // Validate modal message
        member.validate_modal_message_to_delete(memberEmail)
        cy.screenshot()

        // Delete
        member.clickToConfirmMemberDeleteOperation()


        //Assertions
        cy.url().should('eq', cy.config('baseUrl')+'/#/members')
        
        member.validateMemberDoesNotExist(memberEmail)
        cy.screenshot()

        
    })

    it('Test to delete member but the operation is cancelled', () => {

        // Redirect to create member form
        member.navigate_to_members_list()
        cy.screenshot()

        member.click_to_create_new_member()


        var memberName = Math.random()
        var memberEmail =  memberName + '@gmail.com'
        var memberNote = 'Esta es la nota del nuevo miembro: '+memberName
        cy.screenshot()

        member.create_member(memberName, memberEmail, memberNote)

        
        cy.wait(200)
       
        member.navigate_to_members_list()
        cy.screenshot()

        member.open_last_created_member()

        member.validate_created_member(memberName, memberEmail, memberNote)
        cy.screenshot()

        // Delete member
        member.clickDeleteMember()

        // Validate modal message
        member.validate_modal_message_to_delete(memberEmail)
        cy.screenshot()
        
        member.clickToCancelMemberDeleteOperation()

        //Assertions
        member.validate_created_member(memberName, memberEmail, memberNote)
        cy.screenshot()

        
    })
  })
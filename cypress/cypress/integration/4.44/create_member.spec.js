import {Login} from "./pages/login"
const login = new Login()

import {Member} from "./pages/member"
const member = new Member()

describe('Create members', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))
        cy.screenshot()
    })

    it('Test to create member succesfully with mandatory fields', () => {
        
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

        cy.wait(2000)
       
        // Redirect to members list to validate its creation
        member.navigate_to_members_list()
        cy.screenshot()

        member.open_last_created_member()

        cy.wait(2000)
        cy.screenshot()

        member.validate_created_member(memberName, memberEmail, memberNote)
        
        
    })

    it('Test to create member failed when the form does not have all mandatory fields (mail)', () => {

        
        // Redirect to create member form
        member.navigate_to_members_list()
        cy.screenshot()

        member.click_to_create_new_member()
        cy.screenshot()

        var memberName = Math.random()
        var memberNote = 'Esta es la nota del nuevo miembro: '+memberName
        cy.screenshot()

        member.create_member(memberName, '', memberNote)

        // Assertions
        member.validateMessageWhenEmailFieldValueIsMissing()
        cy.screenshot()
        
        cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')

    })

    it('Test to create member failed when the member`s name exceeds the maximum character limit', () => {

        
        // Redirect to create member form
        member.navigate_to_members_list()
        cy.screenshot()

        member.click_to_create_new_member()
        cy.screenshot()

        var memberName = '' +Math.random()
        var memberEmail =  memberName + '@gmail.com'
        var memberNote = 'Esta es la nota del nuevo miembro: '+memberName
        cy.screenshot()

        member.create_member(memberName.repeat(20), memberEmail, memberNote)
        cy.wait(2000)

        // Assertions
        member.validateMessageWhenNameFieldExceedsMaximumCharacterLimit()
        cy.screenshot()
        
        cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')


    })

    it('Test to create member failed when the email already exists', () => {

        
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
        cy.wait(2000)

        // Redirect to members list
        member.navigate_to_members_list()
        cy.screenshot()

        member.click_to_create_new_member()

        // Required fields
        member.create_member(memberName, memberEmail, memberNote)
        cy.screenshot()
        cy.wait(2000)

        
        // Assertions
        member.validateMessageWhenMailMemberAlreadyExist()
        cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')

        
    
    })
  })
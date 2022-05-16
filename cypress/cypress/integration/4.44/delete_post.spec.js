import {Login} from "./pages/login"
const login = new Login()

import {Post} from "./posts/Post"
const post = new Post()

describe('Create post', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))
    })

    it('Test to create post succesfully with mandatory fields', () => {
        
        // Redirect to create member form
        post.navigate_to_pages_list()
        
        post.click_to_create_new_page()
        
        var postName = Math.random()
        var postDescription = 'Esta es la nota del nuevo post: '+pageName

        post.create_post(postName,  postDescription, false)    

        post.validate_created_post(postName, postDescription)
        
        
    })
    
    it('Test to delete post succesfully', () => {

        // Redirect to create member form
        member.navigate_to_members_list()
        cy.screenshot()

        member.click_to_create_new_post()
        cy.screenshot()


        var memberpost = Math.random()
        var memberNote = 'Esta es la nota del nuevo miembro: '+memberName
        cy.screenshot()

        post.create_post(postName,postNote)

        
        cy.wait(200)
       
        post.navigate_to_post_list()
        cy.screenshot()

        member.open_last_created_post()
        cy.screenshot()

        post.validate_created_post(postName,postNote)

        // Delete post
        post.clickDeletepost()
        
        
        // Validate modal message
        post.validate_modal_message_to_delete()
        cy.screenshot()

        // Delete
        post.clickToConfirmMemberDeleteOperation()


        //Assertions
        cy.url().should('eq', cy.config('baseUrl')+'/#/post')
        
        post.validatepostDoesNotExist()
        cy.screenshot()

        
    })

})
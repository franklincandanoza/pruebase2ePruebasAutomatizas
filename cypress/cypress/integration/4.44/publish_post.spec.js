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
    
    if (publish){
        cy.get('div.gh-btn-editor[role="button"]').click()
        cy.wait(1000)
        cy.get('button.gh-publishmenu-button').click()   
        cy.wait(500)
    }        
    else{
        cy.get('a.gh-editor-back-button[href="#/post/"]').click()
        cy.wait(2000)
    }
   
    return this;


})
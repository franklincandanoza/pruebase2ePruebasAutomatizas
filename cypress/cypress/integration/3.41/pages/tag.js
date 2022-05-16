export class Tag {
   
    constructor(screenshot){
        this.screenshot=screenshot;
    }
    navigate_to_tags_list(){
        cy.visit(cy.config('baseUrl')+'/#/tags');
        this.screenshot.take();
    }

    navigate_to_internal_tags_list(){
        cy.visit(cy.config('baseUrl')+'/#/tags?type=internal');
    }

    click_to_create_new_tag() {

        cy.get('span:contains("New tag")').click({force: true});
        this.screenshot.take();
        return this;

    }

    create_tag(tagName, tagSlug, tagDescription, color) {

        // Required fields
        cy.get('form').within(() => {
            
            cy.get('textarea[name="description"]').type(tagDescription)
            cy.get('input[name="slug"]').type(tagSlug)
            
            if(tagName)
                cy.get('input[name="name"]').type(tagName)
            if(color)
                cy.get('input[name="accent-color"]').type(color)    

        })

        // Save
        cy.get('span:contains("Save")').click({force: true});
        this.screenshot.take();
        
        return this;
    }

    validate_if_exist_internal_tag(tagName){
        this.navigate_to_internal_tags_list()
        cy.wait(2000)
        cy.get('h3:contains("'+tagName+'")').click({force: true});
    }

    validate_if_exist_tag(tagName){
        this.navigate_to_tags_list()
        cy.wait(2000)
        cy.get('h3:contains("'+tagName+'")').click({force: true});
    }


    validateMessageWhenTagColorIsWrong(){
        cy.get('p[class="response"]').invoke('text').should('eq', '\n    \n\n    The color should be in valid hex format\n\n    \n\n    \n')
       
    }

}
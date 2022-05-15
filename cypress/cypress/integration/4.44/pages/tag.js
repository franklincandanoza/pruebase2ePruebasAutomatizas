export class Tag {
   
    constructor(screenshot){
        this.screenshot=screenshot;
    }

    navigate_to_tags_list(){
        cy.visit(cy.config('baseUrl')+'/#/tags');
        this.screenshot.take()
    }

    navigate_to_internal_tags_list(){
        cy.visit(cy.config('baseUrl')+'/#/tags?type=internal');
        this.screenshot.take()
    }

    click_to_create_new_tag() {

        cy.get('span:contains("New tag")').click({force: true});
        return this;

    }

    create_tag(tagName, tagSlug, tagDescription) {

        // Required fields
        cy.get('form').within(() => {
            
            cy.get('textarea[name="description"]').type(tagDescription)
            cy.get('input[name="slug"]').type(tagSlug)
            
            if(tagName)
                cy.get('input[name="name"]').type(tagName)

        })
        this.screenshot.take()

        // Save
        cy.get('span:contains("Save")').click({force: true});
        
        return this;
    }

    validate_if_exist_internal_tag(tagName){
        this.navigate_to_internal_tags_list()
        cy.wait(2000)
        this.screenshot.take()
        cy.get('h3:contains("'+tagName+'")').click({force: true});
    }

    validate_if_exist_tag(tagName){
        this.navigate_to_tags_list()
        cy.wait(2000)
        cy.get('h3:contains("'+tagName+'")').click({force: true});
        this.screenshot.take()
    }

    validateMessageWhenTagNameFieldValueIsMissing(){
        cy.get('p[class="response"]').invoke('text').should('eq', '\n    You must specify a name for the tag.\n\n    \n\n    \n\n    \n')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon gh-btn-red ember-view"]').invoke('text').should('eq','    \n    \n    \n     Retry\n')
        this.screenshot.take()
        
    }

}
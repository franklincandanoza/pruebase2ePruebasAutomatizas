export class Tag {
   
    navigate_to_tags_list(){
        cy.get('a.active.ember-view').click()
    }

}
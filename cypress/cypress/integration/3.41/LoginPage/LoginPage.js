class LoginPage{
     navigate() {
        cy.visit(cy.config('baseUrl')+'');
        cy.wait(2000);
    }

    

    enterEmail(username)
    {
        /* cy.window().then((win)=>{
                 let $elements = win.document.getElementsByTagName("input");
                 if($elements.length > 0)
                 {
                     console.log("Hay elementos");
                     for(var i=0;i<$elements.length;i++)
                     {
                         console.log(`Elemento ${$elements.item(i).id}`);
                         if($elements.item(i).id ==="ember8")
                         console.log("Esta el email");
                     }
                 }
             });*/
        //cy.get('input').type('email')
        cy.wait(1000)
        cy.get('input[name="identification"]').type(username);
        
        return this;
     
    } 
    
    enterPassword(pswd) {
        cy.wait(1000)
        cy.get('input[name="password"]').type(pswd);
        return this
    }
    send(){
        cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view').click();
    }


}
export default LoginPage

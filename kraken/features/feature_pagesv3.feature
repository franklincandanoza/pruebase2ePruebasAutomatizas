Feature: Crear Paginas,Liasta paginas, Ingresar a la aplicacion v3.41

@user1 @web
Scenario:  Deseo ingresar a la aplicación, ver la lista de paginas,  crear una pagina y consultar el listado de paginas para validar su creacion
    Given I go to "<URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME1>" into selector "input[name='identification']"
    And I enter password "<PASSWORD1>" into selector "input[name='password']"
    And I push login button with selector "button[type='submit']"
    And I take screenshot of step "1" and scenario "01" and feature "F01" and version "<VERSION1>"
    And I wait for 2 seconds
    And I expect to enter to Ghost home page "<URL2>"
    And I click on Pages list with selector "a[href='#/pages/']"
    And I expect to enter to Ghost Pages section "<URL7>"
    And I take screenshot of step "2" and scenario "01" and feature "F01" and version "<VERSION1>"
    And I wait for 1 seconds
    And I click on New Page with selector "a[href='#/editor/page/']"
    And I wait for 1 seconds
    And I take screenshot of step "3" and scenario "01" and feature "F01" and version "<VERSION1>"
    And I enter Page Title "$name_1" into selector "textarea[placeholder='Page Title']"
    And I enter Page content "$string_1" "$string_2" "$string_3" into selector "div[data-placeholder='Begin writing your page...']"
    And I wait for 1 seconds
    And I take screenshot of step "4" and scenario "01" and feature "F01" and version "<VERSION1>"
    Then I click on Pages with selector "a[href='#/pages/']"
    And I wait for 1 seconds
    And I expect to stay in Ghost Pages section "<URL7>"
    And I looking for page "$$name_1" on pages list into selectors "h[class='gh-content-entry-title']"
    And I take screenshot of step "5" and scenario "01" and feature "F01" and version "<VERSION1>"
    And I wait for 2 seconds

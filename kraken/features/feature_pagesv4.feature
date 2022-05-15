Feature: Crear Paginas,Liasta paginas, Ingresar a la aplicacion v4.4

@user1 @web
Scenario:  Deseo ingresar a la aplicación, ver la lista de paginas,  crear una pagina y consultar el listado de paginas para validar su creacion
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I push login button with selector "button[type='submit']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-2>"
    And I wait for 2 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I click on Pages list with selector "a[href='#/pages/']"
    And I expect to enter to Ghost Pages section "<GHOST-VERSION-2-URL5>"
    And I take screenshot of step "2" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds
    And I click on New Page with selector "a[href='#/editor/page/']"
    And I wait for 1 seconds
    And I take screenshot of step "3" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-2>"
    And I enter Page Title "$name_1" into selector "textarea[placeholder='Page title']"
    And I enter Page content "$string_1" "$string_2" "$string_3" into selector "div[data-placeholder='Begin writing your page...']"
    And I wait for 1 seconds
    And I take screenshot of step "4" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-2>"
    Then I click on Pages with selector "a[href='#/pages/']"
    And I wait for 1 seconds
    And I expect to stay in Ghost Pages section "<GHOST-VERSION-2-URL5>"
    And I looking for page "$$name_1" on pages list into selectors "h3[class='gh-content-entry-title']"
    And I take screenshot of step "5" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds

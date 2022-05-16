Feature: Crear Paginas,Liasta paginas, Ingresar a la aplicacion v3.41

@user1 @web
Scenario:  Deseo ingresar a la aplicación, ver la lista de paginas,  crear una pagina y consultar el listado de paginas para validar su creacion
    Given I go to "<GHOST-VERSION-1-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I push login button with selector "button[type='submit']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    And I wait for 2 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-1-URL2>"
    And I click on Pages list with selector "a[href='#/pages/']"
    And I expect to enter to Ghost Pages section "<GHOST-VERSION-1-URL4>"
    And I take screenshot of step "2" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    And I wait for 1 seconds
    And I click on New Page with selector "a[href='#/editor/page/']"
    And I wait for 1 seconds
    And I take screenshot of step "3" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    And I enter Page Title "$name_1" into selector "textarea[placeholder='Page Title']"
    And I enter Page content "$string_1" "$string_2" "$string_3" into selector "div[data-placeholder='Begin writing your page...']"
    And I wait for 1 seconds
    And I take screenshot of step "4" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    Then I click on Pages with selector "a[href='#/pages/']"
    And I wait for 1 seconds
    And I expect to stay in Ghost Pages section "<GHOST-VERSION-1-URL4>"
    And I looking for page "$$name_1" on pages list into selectors "h[class='gh-content-entry-title']"
    And I take screenshot of step "5" and scenario "<ESCENARIO_7>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    And I wait for 2 seconds


@user2 @web
Scenario:  Deseo ingresar a la aplicación, ver la lista de paginas,  crear una pagina, publicarla e ir a la URL de la nueva pagina para validar que este publicada
    Given I go to "<GHOST-VERSION-1-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I push login button with selector "button[type='submit']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_10>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    And I wait for 2 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-1-URL2>"
    And I click on Pages list with selector "a[href='#/pages/']"
    And I expect to enter to Ghost Pages section "<GHOST-VERSION-1-URL4>"
    And I take screenshot of step "2" and scenario "<ESCENARIO_10>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    And I wait for 1 seconds
    And I click on New Page with selector "a[href='#/editor/page/']"
    And I wait for 1 seconds
    And I take screenshot of step "3" and scenario "<ESCENARIO_10>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    And I enter Page Title "$name_2" into selector "textarea[placeholder='Page Title']"
    And I enter Page content "$string_1" "$string_2" "$string_3" into selector "div[data-placeholder='Begin writing your page...']"
    And I wait for 1 seconds
    And I take screenshot of step "4" and scenario "<ESCENARIO_10>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    And I click on Publish with selector "div[class='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']"
    And I wait for 2 seconds
    And I take screenshot of step "5" and scenario "<ESCENARIO_10>" and feature "Paginas" and version "<GHOST-VERSION-2>"
    And I push Publish button with selector "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I go to published page in "<GHOST-VERSION-1-URL5>" "$$name_2"
    And I wait for 1 seconds
    And I expect to stay on published page "<GHOST-VERSION-1-URL5>" "$$name_2"
    And I take screenshot of step "6" and scenario "<ESCENARIO_10>" and feature "Paginas" and version "<GHOST-VERSION-1>"
    And I wait for 2 seconds


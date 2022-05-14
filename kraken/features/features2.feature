Feature: Crear Etiqueta,Listar_etiqueta Ghost Version 4.44

@user1 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de etquetas, crear una etiqueta y consultar el listados de etiqeutas para validar su creacion
    Given I go to "<URL4>"
    And I wait for 2 seconds
    When I enter email "<USERNAME1>" into selector "input[name='identification']"
    And I enter password "<PASSWORD2>" into selector "input[name='password']"
    And I push login button with selector "button[type='submit']"
    And I wait for 2 seconds
    And I expect to enter to Ghost home page "<URL5>"
    And I click on Tags list with selector "a[href='#/tags/']"
    And I expect to enter to Ghost Tags section "<URL6>"
    And I wait for 1 seconds
    And I click on New Tag with selector "a[href='#/tags/new/']"
    And I wait for 1 seconds
    And I enter Tag Name "$name_1" into selector "input[name='name']"
    And I enter Tag Color "FFFFFF" into selector "input[name='accent-color']"
    And I enter Tag Slug "$name_2" into selector "input[name='slug']"
    And I enter Tag Description "$string_1" into selector "textarea[name='description']"
    And I push Save button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I go to Ghost Tags section "<URL6>"
    And I wait for 1 seconds
    And I expect to stay in Ghost Tags section "<URL6>"
    And I looking for tag "$$name_2" on tags list
    And I wait for 2 seconds


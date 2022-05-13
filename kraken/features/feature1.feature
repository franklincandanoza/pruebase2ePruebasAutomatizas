Feature: Crear Etiueta,Listar_etiqueta

@user1 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de etquetas, crear una etiqueta y consultar el listados de etieutas para validar su creacion
    Given I go to "<URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME1>" into selector "input[name='identification']"
    And I enter password "<PASSWORD1>" into selector "input[name='password']"
    And I push login button with selector "button[type='submit']"
    And I wait for 2 seconds
    And I expect to enter to Ghost home page "<URL2>"
    And I click on Tags list with selector "a[href='#/tags/']"
    And I expect to enter to Ghost Tags section "<URL3>"
    And I wait for 1 seconds
    And I click on New Tag with selector "a[href='#/tags/new/']"
    And I wait for 1 seconds
    And I enter Tag Name "$name_1" into selector "input[name='name']"
    And I enter Tag Color "FFFFFF" into selector "input[name='accent-color']"
    And I enter Tag Slug "$string_1" into selector "input[name='slug']"
    And I enter Tag Description "$string_1" into selector "textarea[name='description']"
    And I push Save button with selector "button[id='ember99']"
    And I wait for 5 seconds

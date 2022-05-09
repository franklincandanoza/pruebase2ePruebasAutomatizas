# pruebase2ePruebasAutomatizas

## How to install Cypress
```
npm install -g cypress
```

## How to run cypress test
Para correr las pruebas con Cypress usar:
```
cypress run
```


## Funcionalidades bajo pruebas
- Crear Post
- Publicar Post
- Listar Posts programados
- Listar todos los posts
- Crear página
- Listar páginas
- Eliminar página
- Crear miembro
- Listar miembros
- Eliminar miembro
- Crear tag
- Listar Tags
- Eliminar tag


## Escenarios de pruebas

1. ### Funcionalidad: Crear miembro, Listar miembros
    - Escenario 1: Crear miembro de forma exitosa con los campos mínimos requeridos: Se inicia sesión, se va a la lista de miembros, se va a la opciòn de nuevo miembro,se crea el miembro y luego se valida que el nuevo miembro está en la lista de miembros registrados en el sistema.
    - Escenario 2: Crear miembro cuando no se diligencia el email del miembro: Se inicia sesión, se va a la lista de miembros, se va a la opciòn de nuevo miembro, se registran los datos excepto el mail del miembro, se intentar guardar y se debe generar validaciòn de campo obligatorio, se devuelve a la lista de miembros y se valida que efectivamente no se haya creado el miembro.
    - Escenario 3: Crear miembro cuando la longitud del nombre está por encima del máximo: Se inicia sesión, se va a la lista de miembros, se va a la opciòn de nuevo miembro, se registran los datos del miembro con un nombre de 191 carácteres, se intentar guardar y se debe generar validaciòn de límite excedido, se devuelve a la lista de miembros y se valida que efectivamente no se haya creado el miembro.
    - Escenario 4: Crear miembro con un correo que ya está siendo usado por otro miembro existente: Se inicia sesión, se va a la lista de miembros, se va a la opciòn de nuevo miembro,se crea el miembro y luego se valida que el nuevo miembro está en la lista de miembros registrados en el sistema, nuevamente nos vamos a la opciòn de crear nuevo miembro, se diligencia los campos del miembro con el mismo correo del primero e intentar guardar para generar mensaje de validaciòn de correo existente.

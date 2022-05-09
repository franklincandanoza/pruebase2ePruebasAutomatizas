# Pruebas End to End usando Kraken y Cypress

## Integrantes del grupo
- Cristian Agudelo (c.agudeloh@uniandes.edu.co)
- David Hidalgo (d.hidalgo@uniandes.edu.co)
- Frank Candanoza (f.candanoza@uniandes.edu.co)
- Rafael Rodriguez (rh.rodriguezr1@uniandes.edu.co)


## Instalar Cypress
```
npm install -g cypress
```

## Ejecuciòn de pruebas con Cypress

Para correr las pruebas con Cypress ubicarse sobre la carpeta cypress y luego ejecutar:
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

2. ### Funcionalidad: Eliminar miembro, Listar miembros, crear miembro
    - Escenario 5: Eliminar miembro de forma exitosa que fue previamente creado: Se inicia sesión, se va a la lista de miembros, se va a la opciòn de nuevo miembro,se crea el miembro, se valida que el nuevo miembro está en la lista de miembros registrados en el sistema, se selecciona el miembro creado y en la vista de detalles del miembro se intenta eliminar, se confirma su eliminaciòn y luego en la vista de todos los miembros no debe aparecer el miembro previamente eliminado.
     - Escenario 6: Intentar eliminar un miembro pero cancelar la operaciòn en la confirmaciòn de la eliminaciòn: Se inicia sesión, se va a la lista de miembros, se va a la opciòn de nuevo miembro,se crea el miembro, se valida que el nuevo miembro está en la lista de miembros registrados en el sistema, se selecciona el miembro creado y en la vista de detalles del miembro se intenta eliminar, se cancela su eliminaciòn y debe seguir listado en la lista de miembros.

3. ### Funcionalidad: Crear Página, Listar Páginas y Publicar Páginas
    - Escenario 7: Crear una página de forma exitosa con los campos mínimos requeridos: Se inicia sesión, se va a la lista de páginas, se va a la opción de nueva página, se crea una página y luego se valida que la nueva página está en la lista de páginas creadas en el sistema.
    - Escenario 8: Crear una página cuando no se diligencia el titulo ni la descripción: Se inicia sesión, se va a la lista de páginas, se va a la opción de nueva página, no se registra ningun dato, se intentar guardar y se valida que no se crea la página.
    - Escenario 9: Crear una página cuando la longitud del titulo está por encima del máximo: Se inicia sesión, se va a la lista de páginas, se va a la opción de nueva página, se registran los datos de la nueva página con un titulo de mas de 250 carácteres, se intentar guardar y se debe generar validaciòn de límite excedido, se devuelve a la lista de páginasy se valida que efectivamente no se haya creado la página.
    - Escenario 10: Crear una página para luego publicarla: Se inicia sesión, se va a la lista de páginas, se va a la opciòn de nueva página,se crea la página y publica la nueva página, luego se valida que la página este publicada. 
    
4. ### Funcionalidad:  Crear Post
    - Escenario 11: Crear un post de manera exitosa: Autenticarse en Ghost, se da click en el botón Write your first Post, luego se coloca un título, se da click en Begin       your first post y luego click en file.

5. ### Funcionalidad:  Crear Post,Publicar Post
    - Escenario 12: Crear y publicar un post de manera exitosa. Autenticarse en Ghost, se da click en el botón Write your first Post, luego se coloca un título, se da click     en Begin your first post y luego click en file, luego se da click en publish, y se confirma la publicación con el botón publish.
6. ### Funcionalidad:  Listar post programados
    - Escenario 13: Listar los posts programados de manera exitosa. Autenticarse en Ghost, luego click en customize your site, click en post, luego seleccionar la opción en     Published de Published post.

7. ### Funcionalidad:  Listar todos los posts
    - Escenario 14: Listar todos los posts de manera exitosa. Autenticarse en Ghost, luego click en customize your site, click en post, luego seleccionar la opción en Published de Published post, click en All posts.

    - Escenario 15: Escoger los posts por el más reciente de manera exitosa. Autenticarse en Ghost, luego click en customize your site, click en post, luego seleccionar la opción sort by y luego escoger Newest.



# Evaluaciòn herramienta Cypress
## Pros:
    - Instalaciòn sencilla con las librerias requeridas para no invertir tanto tiempo en instalaciòn, sino por el contrario el inicio de la automatizaciòn es rápido.
    - La configuraciòn básica que se requiere para iniciar es sencilla y fácil de configurar.
    - La documentación en general es muy completa y con muchos ejemplos para seguir y solucionar problemas.
    - La comunidad para dar soporte a problemas es muy buena, y en general es una herramienta muy usada por automatizadores de pruebas, lo que facilita y apoya mucho en la soluciòn y retos que se presenten.
    - Mientras se realiza la ejecuciòn de los escenarios de pruebas, se toman snapshots que incluso ayudan mucho en la identificaciòn de los pasos de prueba pero también en la documentaciòn de los mismos casos. Adicional, para fallos es bueno para la toma de evidencias.
    - Nos permite ver la ejecuciòn de los test en una GUI donde podemos ver los comandos ejecutados y el resultado de las pruebas. Esto es adicional a la ejecuciòn por consola.
    - Graba videos como evidencia de las pruebas realizadas y muy útiles para casos donde podamos tener bugs en la aplicación.
    - Podemos ejecutar los test ocultando el navegador lo que ayuda mucho en la optimizaciòn de recursos.

## Contras
    - Las características de la máquina pueden impactar en el rendimiento de las pruebas causando que con bajos recursos, tarde mucho tiempo en ejecutarse e incluso haciendo que fallen pruebas por la demora en la carga de los recursos que está esperando la prueba. Esto nos obligó a aumentar un poco las esperas para garantizar que todos los miembros del equipo pudieran ejecutar los escenarios.


# Evaluaciòn herramienta Kraken
## Pros:
    - Se integra mejor con dispositivos moviles que Cypress
## Contras:
    - La curva de aprendizaje de la herramienta es muy pronunciada en los primeros pasos de la adopcion, especialmente en la etapa de "set up"
    - Comunidad poco activa y poca documentación

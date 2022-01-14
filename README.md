![BrightCoders Logo](img/logo-bc.png)

# Nombre del proyecto
App Dulce Hogar

![App Dulce Hogar Logo](img/logo-dulce-hogar.png)

## Problematica que atiende
Las necesidades de resolver problemas domésticos se encuentran al día, regularmente es sencillo llamar a un prestador de servicios ya conocido cuando tenemos un problema en el hogar, sin embargo, ¿qué sucedería si dicho prestador no puede acudir en el momento que necesitamos resolver la situación?. Desde otro punto de vista, ¿cuál sería la forma más rápida de contactar a un prestador de servicios? Aunado a esto, es importante tener la certeza de que la persona que está ingresando a nuestro hogar es confiable, honesta y brinda servicios de calidad. 
App Dulce Hogar permite ofertar el servicio de prestadores locales para que puedan ser contratados de acuerdo a la ubicación y necesidad que se tenga en casa, todo esto de manera sencilla y efectiva. Su trabajo puede ser  calificado por el usuario contratador, para que así los demás usuarios tengan una referencia. 
App Dulce Hogar también impulsa la creación de oportunidades laborales en el sector de prestación de servicios domésticos, cualquier persona puede inscribirse a la aplicación para ofertar sus servicios.


## Propuesta de solución
Un usuario cualquiera se registra en la aplicación con datos generales, posterior a ello, él decide si quiere ser un prestador de servicios, o por otro lado, contratar un servicio. 
Si se desea contratar un servicio, el usuario podrá elegir entre una serie de opciones de oficios la que se adecúe a su necesidad, posterior a ello, podrá ver los usuarios prestadores de servicio que estén disponibles en su zona. Al elegir a uno de ellos, podrá visualizar los datos generales de la persona, su horario y especificaciones del trabajo del prestador. Siguiente, podrá proceder a comunicarse con él mediante un chat o directamente contratar un servicio en la fecha y horario indicados. Únicamente, tendrá que esperar la confirmación del prestador en un máximo de 5 horas. Además, el contratador podrá ver un historial de servicios, los que haya contratado anteriormente y los que haya hecho recientemente.
Si desea ser un prestador, deberá ingresar qué tipo de servicios ofrece, una descripción de lo que hace, una identificación oficial, y además, el horario en que está disponible para laborar. Cuando un usuario decida contratarlo, el prestador recibirá una alerta para confirmar el servicio o de lo contrario, declinarlo. Si lo confirma, el usuario contratador será notificado.

## Definición de requerimientos del MVP

### Requerimientos funcionales
La aplicación deberá:
* Permitir a los nuevos usuarios registrarse:
    * El usuario podrá registrarse utilizando nombre, dirección, correo, clave o cuenta de Facebook.
    * El usuario podrá elegir si desea ser un prestador de servicio o un contratador, puede cambiar esta opción después si así lo desea.
    * El formulario de registro debe de tener validaciones.
    * Los datos de registro se deben guardar en firebase.
    * El diseño debe de apegarse al proporcionado.

* Permitir a los usuarios registrados iniciar sesión
    * El usuario podrá iniciar sesión utilizando correo y clave, o su cuenta de Facebook.
    * El inicio de sesión debe realizarse verifizando los datos almacenados en firebase.
    * El formulario de inicio de sesión debe contar con validaciones.
    * El diseño debe de apegarse al proporcionado.

* Permitir a los usuarios contratar un servicio
    * El usuario podrá ver un listado de todos los oficios disponibles.
    * El usuario podrá ver un listado de los prestadores de acuerdo al oficio seleccionado.
    * El usuario podrá ver los datos del prestador, como su nombre, no. telefónico, zona, horario de atención, descripción, notas importantes, y opiones de clientes anteriores.
    * El usuario podrá chatear con el prestador.
    * El usuario podrá seleccionar una fecha y horario para la contratación.
    * El usuario recibirá una alerta de confirmación de su servicio.
    * El usuario podrá publicar una calificación y reseña del trabajo del prestador.
    * La información debe guardarse en firebase.

* Permitir a los prestadores ofertar su trabajo
    * El usuario podrá escribir una descripción de su trabajo, así como espeficificar detalles importantes.
    * El usuario podrá ser contratado por otros usuarios.
    * El usuario recibirá una alerta de solicitud de servicio, la cual podrá aceptar o declinar.
    * El usuario podrá recibir calificaciones y descripciones de su servicio brindado.
    * La información debe guardarse en firebase.

Algunos de los requerimientos sun un tanto genéricos, es decir no brindan el suficiente detalle, el tratamiento que se debe dar al proyecto es el de un MVP, es decir no es necesario que el funcionamiento o el cumplimiento a los requerimientos sea el más complejo, que cumpla con lo mínimo necesario para que cumpla su función.
    

### Requerimientos no funcionales
* Base de datos
    * La información se guardará en firebase
* Calidad
    * Utilizar un estilo de código estandarizado (revisado por Eslint)
    * Incluir pruebas unitarias
    * Puntuación A obtenida en CodeClimate
* Ejecución
    * Puede ejecutarse en Android o iOs
* Diseño
    * Debe ser lo más cercano posible al proporcionado
* Código fuente
    * Métodos pequeños
* Manejo del estado
    * Redux para el manejo del estado de la App
    
## Diseño del MVP

Incluyan en [esta carpeta](/design) su propuesta de diseño

## Recursos

- [Minimum Viable Product](https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1))
- [Minimum Viable Product (MVP)](https://www.productplan.com/glossary/minimum-viable-product/)
- [Design Thinking](https://www.interaction-design.org/literature/topics/design-thinking)
- [El proceso de pensamiento de diseño](https://www.youtube.com/watch?v=_r0VX-aU_T8)
- [Metodología Design Thinking. Ejemplos](https://www.youtube.com/watch?v=_ul3wfKss58) 
- [Design Thinking ejemplo sencillo](https://www.youtube.com/watch?v=_H33tA2-j0s)

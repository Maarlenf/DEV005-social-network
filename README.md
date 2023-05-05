# Creando una Red Social
![logo-prototipo](https://user-images.githubusercontent.com/124700237/236561806-0c11373f-ae34-476d-9a4a-3ddfccb430c6.png)

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje logrados](#3-objetivos-de-aprendizaje-logrados)
* [4. Historias de usuario](#4-historias-de-usuario)

## 1. Preámbulo
 
 Las redes sociales estan creciendo cada vez más y más, lo cual esta llamando a personas de distintas culturas y edades a ser participes de ellas. Lo cual nos ha motivado a aventurarnos a estructurar una y poder consolidarla.
 
 ![app-cocktail-network-p](https://user-images.githubusercontent.com/124700237/236531880-588c3402-dc7b-476b-90e1-f5811af8f26b.jpg)
 
## 2. Resumen del proyecto

Nuestro proyecto esta basado en la necesidad de usuarios que les guste crear y recrear recetas de cocktail (tragos o bocadillos) y poder compartirlas con otros aficionados. Para consolidar nuestra idea se llevo a cabo una instigación previa, mediante encuestas y de acuerdo a esto diseñamos las historias de usuario, siguiendo los principios de UX/UI. 

La plataforma permite a los usuarios poder registrarse, iniciar sesión e ingresar con sus cuentas Google preexisentes, así entrar a un muro de publicaciones donde pueden postear su receta, editarla y borrarla, tambien darle me gusta o quitarselo. Implementamos medida de seguridad, como permitir el acceso al muro solo a los usuarios ya registrados, si en algun momento un usuario entra en una ruta incorrecta, aparecera una página de error la cual brinda la posibilidad de volver al inicio para poder ingresar nuevamente, así como pueden manipular las publicaciones solo los propietarios de esta.

Nuestro proyecto se trabajo durante todo el proceso de manera colaborativa con Indira Davoin.- https://github.com/HicoTico 

Diseñamos prototipos de baja y alta fidelidad con el objetivo de siempre ir adquiriendo feedback y poder realizar test de usabilidad. 

PROTIPOS BAJA FIDELIDAD
![prototipo-baja1](https://user-images.githubusercontent.com/124700237/236561858-8d4e7427-93ed-4e56-a3e2-e7042d1c8760.png)
![prototipo-baja2](https://user-images.githubusercontent.com/124700237/236561862-40931cf8-1b99-4686-a8e5-c874102cebf5.png)

PROTOTIPO ALTA FIDELIDAD
![prototipo-alta](https://user-images.githubusercontent.com/124700237/236561182-a494fa6e-978a-4766-b936-e772f6a9d042.png)

Para poder apreciar mas el de alta fidelidad => https://www.figma.com/file/jHHvAiuT9rvyqyWrOJDin0/Sign-Up-%2F-Sign-In-Screens---UI-Design-(Community)?type=design&node-id=0-1&t=UczqfsXMGdwCvgS2-0

### 3.- Objetivos de aprendizaje logrados

* Desarrollamos una SPA con la temática Cocktail Network.
* Aplicamos los conceptos de responsividad tanto en versión movil y desktop.
* Implementamos router de navegación entre las diferentes vistas de la plataforma. 
* Empleamos el servicio de Firebase, con el aplicamos el inicio de sesión con email y contraseña, el registro,poder iniciar sesión mediante Google, y cerrar sesión. dentro de Firebase llamamos a Firestore para poder crear nuestra colección y así los usuarios pudiesen hacer sus publicaciones, registrar su fecha de creación, contador de me gusta, y mostrarlo en el muro de manera descendiente según su fecha de creación y pueden editar o borrar su aplicación, todo esto se muestra de manera instantanea sin necesidad de refrescar el sitio. 
* Nuestra plataforma se desplego mediante el servicio de Firebase, Hosting.
* El proyecto completo se trabajo de acuerdo a las historias de usuario bajo la metodología SCRUM, lo cual nos permitio ir recibiendo feedback constante sobre nuestro trabajo e ir haciendo los test de usabilidad y test unitarios antes de seguir con la siguiente historia (test unitarios estan en ramas marlen e indira).
* Se llevaron a cabo servicios de GitHub como el de git tag. Se crearon dos versiones.
 

## 4.- Historias de usuario

Según la investigación previa a realizar el proyecto determinamos las siguientes historias de usuario:

* HU1 .- Yo como usuario de Cockatail Network quiero poder registrarme en la plataforma para tener una cuenta. La necesidad de nuestro usuario esta basada en el poder registrarse e iniciar su experiencia con esta.

* HU2.- Yo como usuario de Cocktail Network quiero poder ingresar a la plataforma con mi email y constraseña o con cuenta Google para poder ir a publicar. La necesidad de nuestro usuario esta basada en el poder ingresar a la plataforma para pdoer crear publicaciones o interactuar con otras publicaciones.

* HU3.- Yo como usuario de Cocktail Network quiero poder crear una publicación para mostrar mi receta. En esta historia detectamos varias necesidades, la principal es poder crear una publicación, luego en ella poder editarla, borrarla y tener me gusta junto su respectio conteo. Dimos enfoque a la propiedad de cada publicación ya que las acciones mencionadas excepto el dar me gusta, solo las ejecuta el dueño de la publicación.

Para mayor información pueden visitar nuestro planning redactado.- https://trello.com/b/5seXUOMk/historias-de-usuario-cocktail-network


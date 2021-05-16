Proyecto - módulo 2

JavaScript

index - ¿? se podría plantear algun pop-up o alguna animación de fondo (como algún elemento que se mueva en el fondo, sin que llame mucho la atención ya que queremos que el usuario le de a comenzar)

card -

Botones - ACORDEON -

    Diseña / Rellena / Contacto

    tienen que ser o un botón o un enlace "a" que con su href vaya a su parte correspondiente

        1) Todos tienen que estar cerrados para eso - añadir clase hidden con una function - classlist.add("hidden") y classlist.remove("la-clase-que.tenga) - se puede plantear hacerlo con un toogle. (esto por cada uno, nose si se puede hacer todo con una sola clase, es cuestión de probar si funciona)

        2) Abrir sólo uno de los elementos, y cuando se abra uno, los demás tienen que estar cerrados - function - añadir la function de arriba dentro y classList.toogle ( o lo que se plantea en el punto 1) (esto por cada uno, nose si se puede hacer todo con una sola clase, es cuestión de probar si funciona)


        3) Invocar el evento - showX.addeEvenListener ('click', como-se-llame-la-ultima-función)

Botón RESET

    Creo que por el momento nos falta información en los apuntes, bicheando he visto que hay una opción que se llama localStorage, pero eso es un llamamiento a la Api para que borre esa información y todavía no estamos trabajando con eso.

Formulario

    Paleta de colores / formulario a rellenar

    en la paleta de colores se plantea:

        - Añadir div en el HTML con position (absolute) y position (relative, la caja contenedora, la madre) para colocar el elemento de color.

        - Con innerHTML ir añadiendo todas las partes del form, para ello hay que coger el .value de los imput - ejmplo:

            const fullName = document.querySelector(".js-name")
            const name = document.querySelector(".js-name-input")

            fution changeCardName () {
                const nameValue = name.value;
                fullName.innerHTML=(nameValue);
            }
            name.addEventListener ("keyup", changeCardName);

Como ha sugerido Iván, podemos hacerlo de dos input para tenerlo controlado, y cuando veamos el temario de objetos, empezar a plantear bien el JavaScript.

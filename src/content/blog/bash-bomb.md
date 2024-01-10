---
id: 1
title: 'Bash Fork() Bomb'
description: 'Con este código shell podrías bloquear tu PC, ¡ten cuidado!'
pubDate: '01-09-2024'
heroImage: '/images/bash-logo.png'
disabled: false
---

El "Bash Fork() Bomb" es un código shell que, aunque intrigante desde el punto de vista técnico, puede tener consecuencias desastrosas si se ejecuta sin cuidado. En este artículo, exploraremos cómo funciona este código, sus riesgos potenciales y por qué es crucial tener precaución al interactuar con él.

El código malicioso en si es tan simple como esto: 

```bash
:(){ :|:& };: 
```

Este código crea una función en Bash que, cuando se llama, genera un número exponencial de procesos secundarios. La recursividad, junto con la redirección de salida y la ejecución en segundo plano, puede sobrecargar rápidamente los recursos del sistema, llevando a un bloqueo total.

### Paso a Paso: Entendiendo el Bash Fork() Bomb

- ##### Definición de la Función:
La línea `:()` define una función llamada `:` que no tiene ningún argumento. Para entenderlo mejor, así se crearía una función en bash:

```bash
helloWorld() {
 arg1 = $1
 echo 'Hello world!'
 # ...hacer algo
}
```
Entonces, la función bomb podría verse algo como esto:

```bash
:() {
 :|:&
};:
```

`:|:` Se utiliza para llamrrse a sí misma utilizando recursión y redirige la salida a otra llamada de la función `:`. La peor parte es que la función se llama dos veces para bombardear aún más tu sistema.

`&` Coloca la llamada a la función en segundo plano para que el proceso hijo no pueda morir en absoluto y comience a consumir recursos del sistema.

`;` Finaliza la definición de la función.

`:` Llama (ejecuta) la función `:`

Aquí hay un ejemplo más legible para un ser humano:

```bash
bomb() { 
 bomb | bomb &
}; bomb
```

<div class="warning-container">
  <p class="warning"><svg class="warning" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>&nbsp;&nbsp;¡Ten cuidado!</p>
  <p>No ejecutes este código en un entorno de producción ni en tu máquina personal, ya que podría causar <strong>daños irreparables y la pérdida de datos</strong>. Este código se presenta con fines educativos para comprender los riesgos asociados con la ejecución de comandos de shell.</p>
</div>

Si estás mas familiarizado con un lenguaje como Javascript, un ejemplo esta bomba en javascript sería la siguiente:
```javascript
function bomb() {
  bomb()
}
bomb()
```


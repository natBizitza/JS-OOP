//JS & OOP

        /* I OOP – utilizamos objetos para modelar cosas del mundo real que queremos representar dentro de nuestros programas.

La Programación orientada a objetos tiene que ver con tres cosas:

1.	Crear objetos individuales a partir de un objeto común.
Before ES6 (before 2015):*/

//Creating a constructor function
function Hero(name, hobby) {
    this.name = name;
    this.hobby = hobby;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '. I like ' + this.hobby);
    };
  }

//Creating new objects
  let hero1 = new Hero('Natalia', 'Coding');
  let phero2 = new Hero('Michael', 'Lifting');


/*JavaScript emula clases de objetos a través de funciones constructoras.
After ES6: Classes*/

class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    greet() {
        return `${this.name} says he will be back.`;
    }
}

// creating new object
let hero3 = new Hero('Terminator', 100);

/*2.	Herencia ayuda a reutilizar lo que tenemos en nuestro objeto, no copiar/reimplementar sus métodos, 
sólo construir un nuevo objeto en la parte superior de la misma.

Todos los objetos JavaScript tienen una propiedad privada que apunta a un segundo objeto ( excepto en algunos
casos raros donde apunta a null ) asociado con ellos - el prototipo.*/

function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says he will be back.`;
}

/*3.	Polimorfismo - la capacidad de varios tipos de objetos para implementar la misma funcionalidad*/

//Creating a constructor function for Hero
function Hero(name, hobby) {
    this.name = name;
    this.hobby = hobby;
}

// Creating a method for Hero
Hero.prototype.greeting = function(){
    return 'Hi! I\'m ' + this.name + '. I like ' + this.hobby;
   };

//Creating a subclass of Hero, Human
function Human(age){
 this.age = age;
}
Human.prototype = new Hero();

//We will override greeting() method for HUman
Human.prototype.greeting = function(){
    return "I am " + this.age + " years old "
}

/*Conclusión: 

Una de las partes principales de la OOP es la creación de instancias
a partir de constructores. Cada instancia que crees debe conservar su individualidad, así que son diferentes
 de otras instancias. Mucha gente no cree que JavaScript sea un Lenguaje de OOP,
pero creo que JavaScript sólo hace las cosas a su manera, que es diferente de otros lenguajes.*/

        /* II JS vs. JAVA & .NET (C #)

1. En primer lugar, hay dos tipos de lenguajes de programación. Programación y lenguajes de programación.

Potencial clave entre Java y JavaScript: Java es un lenguaje de programación OOP, mientras que Java Script 
es un lenguaje de scripting OOP. Java crea aplicaciones que se ejecutan en una máquina virtual o navegador, 
mientras que el código JavaScript se ejecuta en un navegador solamente. El código Java necesita ser 
compilado mientras que el código JavaScript está todo en el texto.

2. Sobre las tecnologías web.

Aquí, tienes dos tipos de códigos. Lado del servidor el que se ejecuta dentro del servidor (php, java, perl, 
python, .NET, etc) que no es visible para el navegador. Código del cliente que se ejecuta en el navegador (JS).*/




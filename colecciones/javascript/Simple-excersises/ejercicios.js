
/*-----------[Ejercicios JavaScript]-------------- */
const myName = 'Alexis';
document.getElementById("myResult").innerHTML = myName

/*-----------[Area Rectangulo]-------------- */
let x = 10;
let y = 5;
let z = x * y;
document.getElementById("area").innerHTML = z

/*-----------[Area Circulo]-------------- */
let r = 2;
let pi = 3.1416;
let res = pi * Math.pow(r, 2);
document.getElementById("area_circulo").innerHTML = res

/*-----------[Area Triangulo]-------------- */
let b = 8;
let h = 3;
let area_tria = b * h / 2;
document.getElementById("area_triangulo").innerHTML = area_tria

/*-----------[Numero Random]-------------- */
let rand = Math.random() * 100;
document.getElementById("numero_random").innerHTML = rand

/*-----------[Numero Random Entero]-------------- */
let rand_int = Math.floor(Math.random() * 100);
document.getElementById("numero_random_int").innerHTML = rand_int

/*-----------[Area Rectangulo Aleatoria]-------------- */
let base = Math.floor(Math.random() * 50);
let altura = Math.floor(Math.random() * 100);
let area_aleatoria = base * altura;
document.getElementById("base_aleatoria").innerHTML = base
document.getElementById("altura_aleatoria").innerHTML = altura
document.getElementById("area_aleatoria").innerHTML = area_aleatoria

/*----------------test-console---------------*/ 
console.log("Hello world");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);


console.log("base rectangulo random: " + base);
console.log("altura rectangulo random: " + altura);
console.log("area rectangulo random: " + area_aleatoria);

for (let i = 0; i < 11; i++) {
  console.log(i);
}



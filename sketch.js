//2016 08 04 jueves
//colegio oreatorio don bosco
//asntiago de chile
//latinoamerica
//clase de programacion
//funciona con p5.js
//simon jorquera

var loliu;

loliu = 90

//setup() corre una vez
//al principio
function setup() {
	//creo un lienzo
	//createCanvas(dimHor, dimVer);
	createCanvas(800, 600);
	
	//pintar el fondo verde;
	//background (red, green, blue);
	//0 es nada, 255 es todo

	background(0, 255, 0);
}


	//draw() se ejecuta despues
	//de setup()
	//se hace 60 veces por segundo



function draw() {
  
	
	//DEFINIR ESTILO DE LA ELIPSE
	//definir ancho del borde
	//strokeWeight(px);
	strokeWeight(10);	
	
	
	//explicacion de color
	//1: grayscale, 0 es negro 255 es blanco;
	//2: grayscale + alpha;
	//3: RGB, red, green, blue;
	//4: RGB + alpha;
	//alpha: 0 es transparente 255 es solido:

	//definir color del borde;
	//stroke(color);
	//borde azul semitransparente;
	stroke(155, 0, 255, 255/2);

	//definir color del relleno
	//fill(color);
	//rojo semitransparente
	//fill(50, 155);
	//fill(random(255), 0, 0, random(255));
	fill(255*mouseX/width, 50, 100);


	//dibujar elipse;
	//que siga al mouse;
	//ellipse(posX, posY, width, height);	
	ellipse(mouseX, mouseY, loliu, loliu);

	loliu = 19 + 100 * random(400/400); 
}
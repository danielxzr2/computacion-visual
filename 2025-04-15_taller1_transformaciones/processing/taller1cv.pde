float angle = 0;
float xPos = 0;
float yPos = 0;
float scaleVal = 1;
  
void setup() {
  size(400, 400, P3D);  // Ventana 3D
}

void draw() {
  background(255);
  
  // Empujar la matriz para aislar transformaciones
  pushMatrix();
  
  // Traslación ondulada en X y Y (función seno)
  xPos = sin(radians(frameCount)) * 100;  // Movimiento en X
  yPos = cos(radians(frameCount)) * 100;  // Movimiento en Y
  
  // Aplicar traslación
  translate(width / 2 + xPos, height / 2 + yPos, 0);
  
  // Rotación en el eje Y
  rotateY(angle);
  
  // Escalar cíclicamente con el tiempo usando sin()
  scaleVal = 1 + sin(millis() * 0.005) * 0.5;  // Oscilación de tamaño
  
  // Aplicar la escala
  scale(scaleVal);
  
  // Dibujar el cubo
  box(50);
  
  // PopMatrix para revertir las transformaciones anteriores
  popMatrix();
  
  // Incrementar el ángulo para rotación constante
  angle += 0.01;
}

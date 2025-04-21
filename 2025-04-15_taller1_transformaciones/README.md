# Proyecto de Transformaciones Gráficas

Este proyecto presenta implementaciones de transformaciones gráficas (traslación, rotación y escala) usando diversas herramientas y tecnologías, como Unity, Three.js, Processing y Python. A continuación, se explica brevemente cómo se implementan las transformaciones en cada uno de estos entornos.

---
## Python

En Python, se utilizan las bibliotecas `matplotlib`, `numpy` y `imageio` para crear animaciones 2D de figuras geométricas. Las transformaciones se aplican de la siguiente forma:
- **Traslación**: Se genera una matriz de traslación para mover una figura a lo largo del espacio.
- **Rotación**: Se utiliza una matriz de rotación para rotar los puntos de la figura alrededor de un centro.
- **Escala**: Se aplica una matriz de escala para aumentar o reducir el tamaño de la figura.
- **Animación**: Las transformaciones se animan en función del tiempo (`t`) o el número de frames, y se guarda la animación como un archivo GIF utilizando `imageio`.

El archivo GIF resultante muestra cómo las transformaciones cambian a lo largo del tiempo, y la matriz resultante de cada transformación se puede mostrar para observar cómo cambia con cada paso de la animación.

---

## Unity

En Unity, se utiliza C# para controlar las transformaciones de objetos en 3D. El proyecto crea un cubo o esfera en una escena y aplica las siguientes transformaciones:
- **Traslación**: Movimiento aleatorio del objeto por los ejes X o Y en intervalos de tiempo definidos.
- **Rotación**: Rotación constante del objeto en función de `Time.deltaTime`, lo que asegura una rotación suave y dependiente del tiempo.
- **Escala**: Oscilación de la escala del objeto a lo largo del tiempo utilizando `Mathf.Sin(Time.time)` para crear un efecto de expansión y contracción.

Las transformaciones son visibles en el entorno 3D de Unity, y el comportamiento de cada una de ellas puede observarse mediante la ejecución de la escena.

---

## Three.js con React Three Fiber

En Three.js con React Three Fiber, se utiliza JavaScript y React para crear un entorno 3D interactivo donde un objeto (cubo o esfera) es animado. Las transformaciones son implementadas de la siguiente manera:
- **Traslación**: El objeto se mueve siguiendo una trayectoria senoidal o circular.
- **Rotación**: El objeto rota sobre su propio eje con un incremento en cada frame.
- **Escala**: La escala del objeto cambia suavemente utilizando una función temporal (`Math.sin(clock.elapsedTime)`), lo que genera una animación de escalado cíclica.
- **OrbitControls**: Se incluyen controles de órbita que permiten al usuario interactuar con la escena 3D y ver el objeto desde diferentes ángulos.

Esta implementación usa `useFrame` de React Three Fiber para actualizar las transformaciones en cada frame de la animación.

---

## Processing

En Processing, que es un entorno de desarrollo para gráficos 2D y 3D, se realiza la animación de un cubo en 3D aplicando transformaciones:
- **Traslación**: Movimiento del cubo a lo largo de un camino ondulado utilizando `sin()` para variar la posición en el tiempo.
- **Rotación**: El cubo rota sobre sus ejes en cada frame usando la función `rotate()`, con un valor dependiente del contador de frames.
- **Escala**: Se cambia la escala del cubo cíclicamente usando `sin(frameCount * 0.1)` para generar un efecto de ampliación y reducción.

Las funciones `pushMatrix()` y `popMatrix()` se utilizan para aislar las transformaciones, de modo que no afecten a otros objetos en la escena.

---



## Cómo Ejecutar

1. **Unity**: Abre el proyecto en Unity y ejecuta la escena.
2. **Three.js**: Ejecuta el proyecto con un servidor local para ver la animación en tu navegador.
3. **Processing**: Abre el código en el IDE de Processing y ejecútalo.
4. **Python**: Ejecuta el código en un entorno Jupyter Notebook o Google Colab.

---



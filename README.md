# ReactJS - Entrega de Ejercicios 1

Máster de Desarrollo Full Stack - Conquer Blocks

## Descripción

9 ejercicios individuales construidos con React, migrados desde sus versiones equivalentes en JavaScript vanilla (ver enunciado original). El objetivo es practicar los fundamentos de React —estado, eventos, listas dinámicas, efectos secundarios y persistencia con `localStorage`— aplicando en cada uno solo lo necesario para resolver el ejercicio concreto.

**Demo publicada:** https://fabianserrano1.github.io/master-proyectos-reactjs/ejercicio-1/

## Ejercicios

| #   | Ejercicio                            | Conceptos clave                                                |
| --- | ------------------------------------ | -------------------------------------------------------------- |
| 1   | Cambiador de Color de Fondo          | `useState`, estilo inline dinámico                             |
| 2   | Contador de Clics                    | `useState`, eventos                                            |
| 3   | Lista Dinámica                       | Arrays en estado, `.map()`, `.filter()`                        |
| 4   | Filtro de Búsqueda en Tiempo Real    | Cálculo derivado del estado                                    |
| 5   | Calculadora Sencilla                 | Formularios controlados, validación                            |
| 6   | Temporizador (Inicio/Pausa/Reinicio) | `useEffect`, `setInterval`, cleanup                            |
| 7   | Generador de Contraseñas Aleatorias  | Generación aleatoria de strings                                |
| 8   | Contador de Palabras y Caracteres    | Expresiones regulares, valores derivados                       |
| 9   | Lista de Tareas con LocalStorage     | `useEffect` (montaje + persistencia), `JSON.stringify`/`parse` |

## Estructura del proyecto

Cada ejercicio es una entrada independiente de Vite (build multi-página), con su propio `index.html`, componente React y estilos en Sass:

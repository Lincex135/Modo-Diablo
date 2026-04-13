# 😈 Modo Diablo 247

Proyecto de Desarrollo Web — Página web sobre el colectivo de trap argentino **Modo Diablo**, desarrollado por [Ximena López Rubio](https://github.com/Lincex135)

## 🧾 Descripción

**Modo Diablo 247** es un sitio web estático dedicado al trío de trap argentino formado por **Duki**, **YSY A** y **Neo Pistea**. La web recoge la historia del colectivo, una página individual por cada artista con su biografía, discografía y enlaces a plataformas de streaming, una sección de música con reproductores de Spotify, y un test interactivo de 20 preguntas sobre el grupo.

El proyecto destaca por su **estética urbana y oscura**, con fondos temáticos por página, notas musicales animadas que caen en la sección de música, y efectos visuales como tarjetas con efecto magnético en las plataformas.

## 👩‍💻 Autora

- [Ximena López Rubio](https://github.com/Lincex135)

## 🗂️ Estructura del Proyecto

```
Modo-Diablo/
├── index.html            # Landing page con hero y presentación del colectivo
├── historia.html         # Historia y origen de Modo Diablo
├── duki.html             # Página individual de Duki
├── ysy_a.html            # Página individual de YSY A
├── neo_pistea.html       # Página individual de Neo Pistea
├── musica.html           # Sección musical con reproductores de Spotify
├── test.html             # Test interactivo de 20 preguntas
├── css/
│   ├── style.css         # Estilos globales y por página
│   └── style_test.css    # Estilos específicos del test y formulario
├── js/
│   ├── script_musica.js      # Animación de notas musicales cayendo
│   ├── script_plataformas.js # Efecto magnético en tarjetas de plataformas
│   └── script_test.js        # Lógica del test: selección, progreso y reset
└── img/
    └── ...               # Imágenes, fondos y logos de plataformas
```

## 🎯 Objetivos del Proyecto

- Practicar la maquetación con **HTML5 semántico** y **CSS3** avanzado.
- Aplicar **JavaScript vanilla** para añadir interactividad sin librerías externas.
- Diseñar una interfaz con identidad visual propia, coherente en todas las páginas.
- Implementar un **formulario completo** con múltiples tipos de input y validación.
- Trabajar con **animaciones CSS** y efectos visuales dinámicos mediante JS.

## 📄 Páginas del Sitio

| Página | Archivo | Descripción |
|--------|---------|-------------|
| 🏠 Inicio | `index.html` | Hero con imagen de fondo, título y acceso a la web |
| 📖 Historia | `historia.html` | Origen del colectivo, El Quinto Escalón y Antezana 247 |
| 🎤 Duki | `duki.html` | Biografía, discografía, datos personales y multimedia |
| 🎤 YSY A | `ysy_a.html` | Biografía, discografía, datos personales y multimedia |
| 🎤 Neo Pistea | `neo_pistea.html` | Biografía, discografía, datos personales y multimedia |
| 🎵 Música | `musica.html` | Reproductores de Spotify con notas animadas de fondo |
| 📝 Test | `test.html` | Formulario interactivo de 20 preguntas con barra de progreso |

## ✨ Funcionalidades Destacadas

<details>
<summary>🎵 Notas musicales animadas — <code>script_musica.js</code></summary>

La página de Música incluye un sistema de partículas que genera notas musicales (`♩ ♪ ♫ ♬ 𝄞...`) cayendo de forma aleatoria por la pantalla. Cada nota tiene color, tamaño, velocidad y posición horizontal aleatorios, con un límite de 30 notas simultáneas en pantalla. Las notas se eliminan del DOM automáticamente al terminar su animación.

</details>

<details>
<summary>🃏 Tarjetas de plataformas con efecto magnético — <code>script_plataformas.js</code></summary>

Las tarjetas de YouTube, Spotify, Apple Music e Instagram tienen un **efecto magnético 3D**: al mover el cursor sobre una tarjeta, esta rota en los ejes X e Y siguiendo la posición del ratón. Al hacer clic, ejecuta una animación de pulso. Al salir, vuelve suavemente a su posición original.

</details>

<details>
<summary>📝 Test interactivo con barra de progreso — <code>script_test.js</code></summary>

El test de 20 preguntas incluye una **barra de progreso** en tiempo real que se actualiza al responder cada pregunta. Soporta inputs de tipo `radio`, `checkbox`, `select` y `number`. Al seleccionar una opción, la etiqueta se resalta visualmente con la clase `seleccionada`. El botón de reset limpia tanto los valores como los estilos aplicados.

</details>

## 🎨 Diseño y Estilos

La web usa una **paleta azul celeste** (`#75AADB`) como color primario, aplicada de forma coherente en toda la interfaz: cabeceras, tablas, bordes y efectos de brillo. Cada página tiene un **fondo temático** propio:

| Página | Fondo |
|--------|-------|
| Historia | `modo_diablo_fondo2.png` |
| Duki | `fondo_alas_morado.png` |
| YSY A | `ysy_fondo_am_resized.jpg` |
| Neo Pistea | `culto_logo_roj2.jpg` |
| Música | `fondo_musica.png` |
| Test | `fondo_test2.png` |

Las secciones de texto sobre fondos de imagen utilizan **glassmorphism** (`backdrop-filter: blur`) con fondo semitransparente oscuro para garantizar la legibilidad. La tipografía combina **Bebas Neue** para títulos y **Inter** para el cuerpo de texto, ambas importadas desde Google Fonts.

## 🧰 Tecnologías Utilizadas

- **HTML5** — Estructura semántica con `nav`, `section`, `fieldset`, `table`, `iframe`
- **CSS3** — Variables CSS, Flexbox, Grid, animaciones `@keyframes`, `backdrop-filter`
- **JavaScript (ES6+)** — Módulo IIFE, `querySelectorAll`, `animate()`, `setInterval`, manipulación del DOM
- **Google Fonts** — Bebas Neue + Inter
- **Spotify Embeds** — Reproductores de canciones incrustados
- **YouTube Embeds** — Vídeos incrustados en páginas de artistas

## 🛠️ Cómo ejecutar el proyecto

<details>
<summary>🔧 Instrucciones</summary>

Al tratarse de un sitio estático, no requiere ningún servidor ni instalación especial.

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Lincex135/Modo-Diablo.git
   ```
2. Acceder a la carpeta del proyecto:
   ```bash
   cd Modo-Diablo
   ```
3. Abrir `index.html` directamente en el navegador, o usar la extensión **Live Server** de VS Code para evitar restricciones CORS con los scripts.

</details>

## 📚 Bibliografía

- [🌐 MDN Web Docs — HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [🎨 MDN Web Docs — CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [⚡ MDN Web Docs — JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [🔤 Google Fonts](https://fonts.google.com/)
- [🎵 Spotify Embeds](https://developer.spotify.com/documentation/embeds)

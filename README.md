# ParaFilmalia
# ParaFilmalia — Sitio Web del Cine

**Autor:** Matías Vindas Cerdas · 2026  
**Tipo:** Frontend estático (HTML + CSS + JavaScript vanilla)  
**Idioma:** Español (todo el contenido visible)

---

## Descripción general

ParaFilmalia es el sitio web oficial de un cine premium. El proyecto presenta una experiencia digital elegante, con estética cinematográfica, diseño oscuro con acentos dorados y un enfoque en la usabilidad y accesibilidad. El sitio está completamente en español y cubre todas las secciones típicas de un cine moderno: cartelera, detalles de película, promociones y contacto.

---

## Estructura de archivos

```
/parafilmalia
├── index.html               ← Página de inicio
├── cartelera.html           ← Cartelera con filtros y búsqueda
├── pelicula.html            ← Detalle de película, horarios y mapa de asientos
├── promociones.html         ← Promociones y eventos especiales
├── contacto.html            ← Formulario de contacto y FAQ
├── README.md                ← Este archivo
│
├── /css
│   └── styles.css           ← Hoja de estilos completa con variables y diseño responsivo
│
├── /js
│   └── main.js              ← Lógica completa de interactividad (sin frameworks)
│
└── /assets
    ├── /img
    │   ├── logo.png              ← Logo del cine (reemplazá con el tuyo)
    │   ├── hero-banner.jpg       ← Banner principal de la página de inicio
    │   ├── movie-1.jpg           ← Póster de película 1
    │   ├── movie-2.jpg           ← Póster de película 2
    │   ├── movie-3.jpg           ← Póster de película 3
    │   ├── movie-4.jpg           ← Póster de película 4
    │   └── placeholder-poster.jpg ← Imagen de respaldo para pósteres
    └── /icons
        └── (íconos opcionales SVG)
```

---

## Cómo abrir el sitio localmente

1. **Descargá o cloná** esta carpeta en tu computadora.
2. **Abrí el archivo `index.html`** directamente en tu navegador (doble clic o arrastrándolo al navegador).
3. No se requiere servidor, instalación ni dependencias externas.
4. Funciona en cualquier navegador moderno (Chrome, Firefox, Safari, Edge).

> **Nota:** Para mejores resultados, usá un servidor local simple (como `python3 -m http.server` o la extensión Live Server de VS Code) para evitar posibles restricciones de CORS en algunos navegadores.

---

## Descripción de cada página

| Página | Archivo | Descripción |
|--------|---------|-------------|
| Inicio | `index.html` | Hero con titular principal, películas destacadas, próximos estrenos, experiencia del cine, testimoniales y banner promocional |
| Cartelera | `cartelera.html` | Grilla de todas las películas con búsqueda, filtro por género y ordenamiento dinámico (JavaScript) |
| Película | `pelicula.html` | Detalle completo de una película: sinopsis, reparto, horarios, mapa de asientos interactivo y modal de tráiler |
| Promociones | `promociones.html` | Tarjetas de descuento con códigos copiables, y calendario de eventos especiales |
| Contacto | `contacto.html` | Formulario validado en JS, tarjetas de información, mapa placeholder y acordeón de preguntas frecuentes |

---

## Funcionalidades implementadas en JavaScript

-  Navegación sticky con blur al hacer scroll
-  Menú hamburger para dispositivos móviles
-  Enlace de navegación activo según la página actual
-  Animación de fade-in al hacer scroll (Intersection Observer)
-  Cartelera con búsqueda, filtro por género y ordenamiento
-  Estado vacío cuando no hay resultados de búsqueda
-  Mapa de asientos interactivo (seleccionados, ocupados, disponibles)
-  Cálculo dinámico del precio según asientos seleccionados
-  Selector de fecha de función con tabs
-  Modal de tráiler con apertura, cierre y soporte de teclado (Esc)
-  Acordeón de preguntas frecuentes
-  Formulario de contacto con validación en tiempo real
-  Copiar código de promoción al portapapeles
-  Sistema de notificaciones toast
-  Fallbacks de imágenes cuando no están disponibles

---

## Imágenes necesarias

Para que el sitio se vea completo con medios reales, colocá las siguientes imágenes en `/assets/img/`:

| Archivo | Dimensiones recomendadas | Descripción |
|---------|--------------------------|-------------|
| `logo.png` | ~200×80 px | Logo de ParaFilmalia (fondo transparente) |
| `hero-banner.jpg` | 1920×1080 px | Imagen de fondo del hero en inicio |
| `movie-1.jpg` | 400×600 px | Póster formato 2:3 para películas |
| `movie-2.jpg` | 400×600 px | Póster formato 2:3 |
| `movie-3.jpg` | 400×600 px | Póster formato 2:3 |
| `movie-4.jpg` | 400×600 px | Póster formato 2:3 |

> El sitio funciona aunque no existan estas imágenes, gracias a los fallbacks integrados.

---

## Notas técnicas

- **Frontend only:** No hay backend, base de datos, autenticación ni llamadas a APIs externas.
- **Sin frameworks:** Solo HTML5, CSS3 y JavaScript vanilla (ES6+).
- **CSS Variables:** Todo el sistema de colores, espaciado y sombras está centralizado en `:root`.
- **Responsivo:** Diseñado para desktop, tablet y móvil con CSS Grid y Flexbox.
- **Accesibilidad:** Includes `role`, `aria-*`, estados de foco visibles, contraste adecuado y navegación por teclado.
- **Fuentes:** Playfair Display (titulares) y DM Sans (cuerpo) — cargadas desde Google Fonts.

---

## Créditos

**Diseño y desarrollo:** Matías Vindas Cerdas · 2026  
**Marca:** ParaFilmalia  
**Tecnologías:** HTML5, CSS3, JavaScript ES6+

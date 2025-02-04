# Portafolio Astro

Este proyecto es una plantilla básica para crear un portafolio personal utilizando Astro y otras tecnologías web modernas.

## Descripción

El proyecto está diseñado para proporcionar una base sólida para construir un portafolio personal. Utiliza Astro, un framework moderno para crear sitios web rápidos y optimizados. Además, incorpora React y Tailwind CSS para mejorar la experiencia de desarrollo y estilización.

## Estructura del Proyecto

Dentro del proyecto de Astro, encontrarás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

- **public/**: Contiene activos estáticos como imágenes y favicon.
- **src/components/**: Carpeta para componentes Astro/React/Vue/Svelte/Preact.
- **src/layouts/**: Carpeta para diseños reutilizables.
- **src/pages/**: Contiene archivos `.astro` o `.md` que se exponen como rutas basadas en su nombre de archivo.
- **package.json**: Archivo de configuración del proyecto y dependencias.

## Tecnologías Utilizadas

- **Astro**: Framework para crear sitios web rápidos.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para crear diseños personalizados de manera rápida y eficiente.
- **TypeScript**: Superconjunto tipado de JavaScript que mejora el desarrollo y la mantenibilidad del código.

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Juanmorales1810/portfolioAstro.git
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd portfolioAstro
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Compila el sitio de producción en `./dist/`      |
| `npm run preview`         | Previsualiza el sitio de producción localmente   |
| `npm run astro ...`       | Ejecuta comandos de CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtiene ayuda usando la CLI de Astro             |

## Uso del Proyecto

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:
```sh
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) con tu navegador para ver el resultado.

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](https://github.com/Juanmorales1810/portfolioAstro/blob/main/LICENSE) para más detalles.

## Enlaces

- [Documentación de Astro](https://docs.astro.build)
- [Servidor de Discord de Astro](https://astro.build/chat)


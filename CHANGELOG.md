# Change Log

All notable changes to the "phlexmod-vscode" extension will be documented in this file.

## [1.0.5] - 2026-01-04

- **Corrección**: Solucionada inconsistencia en ruta de endpoint en snippet JS (`px-js`). Ahora usa ruta relativa `../endpoints/` por defecto.

## [1.0.4] - 2026-01-04

- **Documentación**: Actualizado README para reflejar los nuevos prefijos `px-*` correctamente.

## [1.0.3] - 2026-01-04

- **Ergonomía**: Cambio masivo de prefijo a `px-` (Phlexmod) para mayor consistencia con el icono y rapidez de escritura.
- **Correcciones**: Ajuste de versión post-publicación.

## [1.0.2] - 2026-01-04

- **Seguridad**: Mejora en `px-api` para prevenir InfoLeak en respuestas 500 (mensaje genérico al cliente).
- **Nuevo Snippet**: `px-log-action` para auditoría de acciones en base de datos.

## [1.0.1] - 2026-01-04

- **Seguridad MIA**: Actualizados todos los snippets para usar `Sanitizer` y `Logger` por defecto.
- **Refactorización**: Separación de snippets en archivos específicos por lenguaje (`php.json`, `javascript.json`).
- **Nuevos Snippets**:
  - `px-api`: Endpoint seguro con manejo de errores anti-infoleak (anteriormente mia-api).
  - `px-js`: Estructura de módulo JS con patrón de namespace (anteriormente mia-js).
  - `px-log`: Utilidad rápida para `Logger::info` (anteriormente mia-log).
- **Estandarización**: Unificación de prefijos bajo identidad `px`.

## [1.0.0] - 2026-01-04

- Lanzamiento inicial.
- Incluye snippets: `phlex-api`, `phlex-ui`, `san-post`, `pg-query`.
- Configuración básica de extensión.

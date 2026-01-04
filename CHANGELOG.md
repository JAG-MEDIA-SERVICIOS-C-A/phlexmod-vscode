# Change Log

All notable changes to the "phlexmod-vscode" extension will be documented in this file.

## [1.0.2] - 2026-01-04

- **Seguridad**: Mejora en `mia-api` para prevenir InfoLeak en respuestas 500 (mensaje genérico al cliente).
- **Nuevo Snippet**: `mia-log-action` para auditoría de acciones en base de datos.
- **Correcciones**: Ajustes menores en estructura de snippets PHP.

## [1.0.1] - 2026-01-04

- **Seguridad MIA**: Actualizados todos los snippets para usar `Sanitizer` y `Logger` por defecto.
- **Refactorización**: Separación de snippets en archivos específicos por lenguaje (`php.json`, `javascript.json`).
- **Nuevos Snippets**:
  - `mia-api`: Endpoint seguro con manejo de errores anti-infoleak.
  - `mia-js`: Estructura de módulo JS con patrón de namespace.
  - `mia-log`: Utilidad rápida para `Logger::info`.
- **Limpieza**: Eliminados snippets legacy inseguros (`phlex-api`, etc).

## [1.0.0] - 2026-01-04

- Lanzamiento inicial.
- Incluye snippets: `phlex-api`, `phlex-ui`, `san-post`, `pg-query`.
- Configuración básica de extensión.

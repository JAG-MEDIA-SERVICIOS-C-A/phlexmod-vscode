# Phlexmod MIA Assistant

Extensión oficial de desarrollo para Phlexmod. Herramientas, snippets y soporte de arquitectura MIA para VS Code, Windsurf y Trae.

El conjunto de herramientas esencial para desarrolladores de Phlexmod. Esta extensión proporciona soporte estructural para la Arquitectura de Aislamiento Modular (MIA), snippets inteligentes para endpoints y UI con Bootstrap 5.3, y utilidades de tipado para PHP 8.4. Acelera tu flujo de trabajo manteniendo los estándares de seguridad y organización del framework.

## Funcionalidades MIA

### 🏗️ Generación de Estructura Modular

Crea archivos que respetan la separación estricta de responsabilidades:

| Snippet    | Función MIA                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `px-api`   | Genera un **Endpoint Soberano** en `/endpoints/`. Incluye validación de sesión, sanitización obligatoria y manejo de errores encapsulado. |
| `px-ui`    | Crea una **Vista Aislada** en `/ui/`. Estructura HTML limpia lista para ser consumida por el controlador principal.                       |
| `px-js`    | Crea un **Módulo JS Modular** con patrón de namespace, evitando colisiones globales.                                                      |
| `px-log`   | Utilidad rápida para invocar `Logger::info` o `Logger::error` siguiendo estándares de trazabilidad.                                       |

### 🔧 Configuración Recomendada

La extensión sugiere configuraciones óptimas para PHP Intelephense y estándares de codificación de Phlexmod.

## Instalación

1. Descarga el archivo `.vsix` de la última versión.
2. En VS Code, ve a **Extensiones** (`Ctrl+Shift+X`).
3. Haz clic en el menú `...` (Más acciones) > **Instalar desde VSIX...**
4. Selecciona el archivo descargado.

## Requisitos

- VS Code 1.75.0 o superior.
- PHP instalado en el sistema.

## Contribución

Reporta problemas o sugiere mejoras en nuestro [Repositorio de GitHub](https://github.com/JAG-MEDIA-SERVICIOS-C-A/phlexmod-vscode).

---

**JAG-Media Servicios, C.A.**

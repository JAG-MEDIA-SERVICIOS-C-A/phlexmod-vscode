# Guía de Publicación en VS Code Marketplace

Esta guía detalla los pasos para empaquetar y publicar la extensión `phlexmod-vscode`.

## Prerrequisitos

1. Tener **Node.js** instalado.
2. Instalar la herramienta `vsce` (Visual Studio Code Extensions) globalmente:
   ```bash
   npm install -g vsce
   ```
3. Tener una cuenta en [Azure DevOps](https://dev.azure.com/) y un **Personal Access Token (PAT)** configurado con permisos de `Marketplace (manage)`.
4. Haber creado un "Publisher" en el [Marketplace Management Portal](https://marketplace.visualstudio.com/manage).

## 1. Empaquetado Local (.vsix)

Antes de publicar, es recomendable probar el paquete localmente.

Ejecuta el siguiente comando dentro de la carpeta `extensions/phlexmod-vscode`:

```bash
cd extensions/phlexmod-vscode
vsce package
```

Esto generará un archivo `phlexmod-vscode-1.0.0.vsix`. Puedes instalarlo manualmente en VS Code para probarlo.

## 2. Publicación

Una vez verificado, publica la extensión con:

```bash
vsce publish
```

Si es la primera vez, te pedirá el **Personal Access Token**.

### Actualizar Versión

Para subir una nueva versión, incrementa el número en `package.json` o usa:

```bash
vsce publish patch  # 1.0.0 -> 1.0.1
vsce publish minor  # 1.0.0 -> 1.1.0
vsce publish major  # 1.0.0 -> 2.0.0
```

## Checklist antes de publicar

- [ ] Actualizar `version` en `package.json`.
- [ ] Actualizar `CHANGELOG.md` con las novedades.
- [ ] Verificar que el `README.md` esté actualizado.
- [ ] Asegurar que el icono `icon.png` (128x128) exista si está referenciado.

## Estructura del Repositorio Independiente

Si decides mover esta carpeta a su propio repositorio git:

1. Mueve todo el contenido de `extensions/phlexmod-vscode` a la raíz del nuevo repo.
2. Inicializa git: `git init`.
3. Crea un `.gitignore` ignorando `node_modules` y `*.vsix`.
4. Sube a GitHub.

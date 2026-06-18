# AXUDI Web

Web de AXUDI construida con React, Vite y SCSS.

## Noticias y panel de administración

Las noticias se gestionan con Sveltia CMS desde:

```txt
/admin
```

El panel edita archivos Markdown guardados en:

```txt
src/content/news
```

Las imágenes destacadas de noticias se guardan en:

```txt
public/uploads/news
```

Cada noticia tiene estos campos:

- `title`: título de la noticia.
- `date`: fecha en formato `YYYY-MM-DD`.
- `category`: categoría.
- `image`: imagen destacada.
- `alt`: texto alternativo de la imagen.
- `excerpt`: resumen corto.
- `draft`: si está en `true`, no se publica en la web.
- `body`: contenido principal.

## Activar acceso en Netlify

Cuando el proyecto esté subido al GitHub de la asociación y conectado a Netlify:

1. Activar Netlify Identity.
2. Activar Git Gateway.
3. Invitar por email a las personas que puedan editar noticias.
4. Entrar en `/admin` y crear o editar noticias desde el panel.

El CMS está configurado para usar `git-gateway` sobre la rama `main`.

## Comandos

```bash
npm run dev
npm run build
npm run lint
```

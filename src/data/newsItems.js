import placeholderImage from '../assets/logos/logoAxudi-placeholder.svg';

// Carga todos los archivos Markdown de noticias como texto en tiempo de build.
const newsFiles = import.meta.glob('../content/news/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});

// Separa los metadatos del frontmatter y el contenido principal de la noticia.
function parseFrontmatter(rawContent) {
  const match = rawContent.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return {
      data: {},
      body: rawContent.trim(),
    };
  }

  const [, frontmatter, body] = match;
  const data = {};

  frontmatter.split('\n').forEach((line) => {
    const separatorIndex = line.indexOf(':');

    if (separatorIndex === -1) {
      return;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '');

    if (value === 'true') {
      data[key] = true;
      return;
    }

    if (value === 'false') {
      data[key] = false;
      return;
    }

    data[key] = value;
  });

  return {
    data,
    body: body.trim(),
  };
}

// Convierte el Markdown en texto plano para filtros, buscador y extractos largos.
function markdownToText(markdown) {
  return markdown
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\n{2,}/g, ' ')
    .replace(/\n/g, ' ')
    .trim();
}

// Normaliza las noticias para que los componentes sigan recibiendo el mismo formato.
const newsItems = Object.entries(newsFiles)
  .map(([path, rawContent]) => {
    const { data, body } = parseFrontmatter(rawContent);
    const filename = path.split('/').pop().replace('.md', '');
    const image = data.image || placeholderImage;
    const alt = data.alt || 'Imagen relacionada con AXUDI';

    return {
      id: data.id || filename,
      title: data.title || '',
      excerpt: data.excerpt || '',
      body: markdownToText(body),
      content: body,
      // Si el CMS no recibe imagen o alt, la tarjeta mantiene una salida estable.
      image,
      alt,
      category: data.category || 'Asociación',
      date: data.date || '',
      draft: data.draft === true,
    };
  })
  .filter((news) => !news.draft);

export default newsItems;

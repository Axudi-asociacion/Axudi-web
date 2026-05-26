import NewsCard from '../../components/NewsCard/NewsCard';

function NewsEvents() {
  return (
    <main className="news-events-page">
      <h1 className="news-events-page__title">
        Noticias y eventos
      </h1>

      <div className="news-events-page__cards">

        <NewsCard
          title="Primer encuentro AXUDI"
          text="Muy pronto compartiremos más información sobre nuestras próximas actividades."
          image=""
          alt="Imagen del primer encuentro AXUDI"
          href="/noticias-y-eventos/primer-encuentro-axudi"
        />

        <NewsCard
          title="Talleres para jóvenes con diabetes"
          text="Espacios para aprender, compartir experiencias y resolver dudas."
          image=""
          alt="Imagen de talleres para jóvenes con diabetes"
          href="/noticias-y-eventos/talleres"
        />

        <NewsCard
          title="Nueva etapa de la asociación"
          text="AXUDI empieza a caminar como comunidad joven, cercana y participativa."
          image=""
          alt="Imagen sobre AXUDI"
          href="/noticias-y-eventos/nueva-etapa"
        />

      </div>
    </main>
  );
}

export default NewsEvents;
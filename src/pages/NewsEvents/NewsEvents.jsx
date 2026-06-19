import { useMemo, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';
import NewsCard from '../../components/NewsCard/NewsCard';
import TypewriterText from '../../components/TypewriterText/TypewriterText';

import newsItems from '../../data/newsItems';

import smileIcon from '../../assets/icons/i-smile.svg';

import './NewsEvents.scss';

const ITEMS_PER_PAGE = 6;

function NewsEvents() {
  // Estado de filtros, orden y paginación del archivo de noticias.
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [sortOrder, setSortOrder] = useState('desc');

  // Categorías disponibles generadas desde el contenido publicado.
  const categories = useMemo(() => {
    const uniqueCategories = newsItems.map((news) => news.category);

    return ['todas', ...new Set(uniqueCategories)];
  }, []);

  // Aplica búsqueda, categoría y orden cronológico.
  const filteredNews = useMemo(() => {
    return [...newsItems]
      .filter((news) => {
        const normalizedSearch = searchTerm.toLowerCase().trim();

        const matchesSearch =
          news.title.toLowerCase().includes(normalizedSearch) ||
          news.excerpt.toLowerCase().includes(normalizedSearch) ||
          news.body.toLowerCase().includes(normalizedSearch);

        const matchesCategory =
          selectedCategory === 'todas' ||
          news.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return sortOrder === 'desc'
          ? dateB - dateA
          : dateA - dateB;
      });
  }, [searchTerm, selectedCategory, sortOrder]);

  // Calcula la página visible a partir de los resultados filtrados.
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE) || 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleNews = filteredNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Cada cambio de filtro vuelve a la primera página de resultados.
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  }

  function handleSortChange(event) {
    setSortOrder(event.target.value);
    setCurrentPage(1);
  }

  function resetFilters() {
    setSearchTerm('');
    setSelectedCategory('todas');
    setSortOrder('desc');
    setCurrentPage(1);
  }

  return (
    <>
      <Header />

      <main>
        <Section className="news-events-page">

          <header className="news-events-page__header">

            <TypewriterText
              as="h1"
              className="news-events-page__title"
              text="Noticias y eventos"
            />

            <p className="news-events-page__intro">
              Aquí encontrarás nuestras actividades, encuentros,
              talleres y novedades.
            </p>

          </header>

          {/* Panel desplegable de filtros y ordenación. */}
          <details className="news-events-page__filters-panel">

            <summary className="news-events-page__filters-summary">
              Filtrar noticias
            </summary>

            <form
              className="news-events-page__filters"
              role="search"
              aria-label="Filtrar noticias y eventos"
            >

              <div className="news-events-page__field">

                <label
                  htmlFor="news-search"
                  className="news-events-page__label"
                >
                  Buscar
                </label>

                <input
                  id="news-search"
                  className="news-events-page__input"
                  type="search"
                  placeholder="Buscar noticias..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />

              </div>

              <div className="news-events-page__field">

                <label
                  htmlFor="news-category"
                  className="news-events-page__label"
                >
                  Categoría
                </label>

                <select
                  id="news-category"
                  className="news-events-page__select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category === 'todas'
                        ? 'Todas'
                        : category}
                    </option>
                  ))}
                </select>

              </div>

              <div className="news-events-page__field">

                <label
                  htmlFor="news-sort"
                  className="news-events-page__label"
                >
                  Orden
                </label>

                <select
                  id="news-sort"
                  className="news-events-page__select"
                  value={sortOrder}
                  onChange={handleSortChange}
                >
                  <option value="desc">
                    Más recientes primero
                  </option>

                  <option value="asc">
                    Más antiguas primero
                  </option>
                </select>

              </div>

              <button
                type="button"
                className="button button--secondary news-events-page__reset"
                onClick={resetFilters}
              >
                Limpiar filtros
              </button>

              <p
                className="news-events-page__results"
                aria-live="polite"
              >
                {filteredNews.length === 1
                  ? '1 noticia encontrada'
                  : `${filteredNews.length} noticias encontradas`}
              </p>

            </form>

          </details>

          {visibleNews.length > 0 ? (
            <div className="news-events-page__cards">

              {visibleNews.map((news) => (
                <NewsCard
                  key={news.id}
                  title={news.title}
                  excerpt={news.excerpt}
                  body={news.body}
                  image={news.image}
                  alt={news.alt}
                />
              ))}

            </div>
          ) : (
            <div className="news-events-page__empty" aria-live="polite">
              <img
                src={smileIcon}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />

              <p>
                {newsItems.length === 0
                  ? 'Próximamente tendréis noticias nuestras.'
                  : 'No hemos encontrado noticias con esos filtros.'}
              </p>
            </div>
          )}

          {/* Paginación del listado de noticias. */}
          {visibleNews.length > 0 && (
            <nav
              className="news-events-page__pagination"
              aria-label="Paginación"
            >

              <button
                type="button"
                className="news-events-page__page-button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                aria-label="Ir a la página anterior"
              >
                ←
              </button>

              <span className="news-events-page__page-info">
                Página {currentPage} de {totalPages}
              </span>

              <button
                type="button"
                className="news-events-page__page-button"
                disabled={currentPage === totalPages || totalPages <= 1}
                onClick={() => setCurrentPage(currentPage + 1)}
                aria-label="Ir a la página siguiente"
              >
                →
              </button>

            </nav>
          )}

        </Section>
      </main>

      <Footer />
    </>
  );
}

export default NewsEvents;

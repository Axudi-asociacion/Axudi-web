function Section({
  children,
  className = '',
  id = ''
}) {
  return (
    // Envoltorio común para mantener secciones con el mismo contenedor interior.
    <section
      className={className}
      id={id}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}

export default Section;

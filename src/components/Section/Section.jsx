function Section({
  children,
  className = '',
  id = ''
}) {
  return (
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
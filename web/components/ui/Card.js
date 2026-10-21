export default function Card({ title, sub, children, className = "", footer }) {
  return (
    <section className={`bg-surface border border-line rounded-lg ${className}`}>
      {(title || sub) && (
        <div className="px-5 pt-5 pb-3">
          {title && <h2 className="text-base font-semibold text-ink">{title}</h2>}
          {sub && <p className="text-sm text-ink-2 mt-1">{sub}</p>}
        </div>
      )}
      <div className="px-5 pb-5">{children}</div>
      {footer && <div className="px-5 py-3 border-t border-line-2 text-xs text-ink-3">{footer}</div>}
    </section>
  );
}

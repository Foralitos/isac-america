const FormSection = ({ title, description, children, showDivider = true }) => {
  return (
    <div className="space-y-6">
      {/* Decorative line */}
      <div className="w-16 h-1 bg-white"></div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>

      {/* Optional description */}
      {description && (
        <p className="text-white/70 leading-relaxed -mt-2">{description}</p>
      )}

      {/* Content */}
      <div className="space-y-4">{children}</div>

      {/* Divider */}
      {showDivider && (
        <div className="border-t border-white/15 mt-8 pt-2"></div>
      )}
    </div>
  );
};

export default FormSection;

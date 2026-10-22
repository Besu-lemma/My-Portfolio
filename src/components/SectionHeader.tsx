type SectionHeaderProps = {
  index: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  index,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`mb-10 md:mb-14 ${className}`}>
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-mono-meta text-xs text-primary tracking-widest">
          {index}
        </span>
        <span className="h-px flex-1 max-w-[4rem] bg-rule self-center" aria-hidden />
        <span className="font-mono-meta text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Section
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl text-base leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}

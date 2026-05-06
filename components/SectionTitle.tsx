type SectionTitleProps = {
  eyebrow?: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>

      <div className="accent-line mt-4" />
    </div>
  );
}
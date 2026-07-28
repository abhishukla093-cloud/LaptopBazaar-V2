interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {badge && (
        <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400 shadow-[0_0_25px_rgba(249,115,22,0.15)]">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-9 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
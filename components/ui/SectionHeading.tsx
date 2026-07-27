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
    <div className="mx-auto max-w-3xl text-center">
      {badge && (
        <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
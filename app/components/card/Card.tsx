import { Chip } from '@/components/chip';

type Props = {
  title: string;
  subtitle: string;
  description: string;
  tags?: Array<string>;
};

export function Card({ title, subtitle, description, tags }: Props) {
  return (
    <div className="rounded bg-slate-200 p-4 dark:bg-slate-800">
      <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-200">
        {title}
      </h3>

      <h4 className="text-base text-slate-600 dark:text-slate-400">
        {subtitle}
      </h4>

      <p className="mt-3 text-sm font-normal text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {tags && tags.length > 0 ? (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tags.map((tag) => (
            <li key={tag} className="mt-1 mr-2">
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

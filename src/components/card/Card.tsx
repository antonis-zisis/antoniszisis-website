import { motion } from 'framer-motion';

import { Chip } from '@/components/chip';

type Props = {
  title: string;
  subtitle: string;
  description: Array<string>;
  tags?: Array<string>;
};

export function Card({ title, subtitle, description, tags }: Props) {
  return (
    <motion.div
      className="rounded bg-slate-200 p-4 dark:bg-slate-800"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-200">
        {title || subtitle}
      </h3>

      {title ? (
        <h4 className="text-base text-slate-600 dark:text-slate-400">
          {subtitle}
        </h4>
      ) : null}

      {description.map((paragraph, index) => (
        <p
          key={index}
          className="mt-3 font-serif text-sm font-normal text-slate-600 dark:text-slate-400"
        >
          {paragraph}
        </p>
      ))}

      {tags && tags.length > 0 ? (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tags.map((tag) => (
            <li key={tag} className="mt-1 mr-2">
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.div>
  );
}

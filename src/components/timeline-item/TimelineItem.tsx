import cn from 'classnames';
import { motion } from 'framer-motion';

import { Card } from '@/components/card';
import type { TimelineEntry } from '@/data/timeline';

type Props = {
  item: TimelineEntry;
  isEven: boolean;
};

export function TimelineItem({ item, isEven }: Props) {
  return (
    <motion.div
      className={cn(
        'relative flex flex-col items-center justify-between md:flex-row',
        {
          'md:flex-row': isEven,
          'md:flex-row-reverse': !isEven,
        }
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% of the item is in view
    >
      <div className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-red-800 dark:bg-teal-300" />

      <div
        className={cn('w-full md:w-1/2', {
          'md:pr-4': isEven,
          'md:pl-4': !isEven,
        })}
      >
        <Card
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          tags={item.tags}
        />
      </div>

      <motion.div
        className={cn('flex w-full md:w-1/2', {
          'md:justify-start md:pl-4': isEven,
          'md:justify-end md:pr-4': !isEven,
        })}
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-red-800 dark:text-teal-300">
          {item.date}
        </span>
      </motion.div>
    </motion.div>
  );
}

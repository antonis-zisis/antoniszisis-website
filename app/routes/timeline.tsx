import cn from 'classnames';
import { motion } from 'framer-motion';
import type { MetaFunction } from 'react-router';

import { Card } from '@/components/card';
import { Divider } from '@/components/divider';
import { timelineData } from '@/data/timeline';

export const meta: MetaFunction = () => {
  return [
    { title: 'Timeline | Antonis Zisis' },
    {
      name: 'description',
      content:
        'Explore the career timeline of Antonis Zisis — from his first role as a web developer to leading a team at Kaizen Gaming.',
    },
  ];
};

export default function Timeline() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-var(--navbar-height)-var(--footer-height))] max-w-(--breakpoint-lg) flex-col items-start px-6 md:px-0">
      <h1 className="pt-28 text-3xl font-semibold text-slate-600 dark:text-slate-200">
        Timeline
      </h1>

      <h2 className="text-lg font-medium text-slate-600 dark:text-slate-400">
        My story in one page
      </h2>

      <Divider />

      <div className="relative w-full pt-10 pb-20">
        <div className="absolute top-[-8px] left-1/2 -translate-x-1/2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0L12 8H0L6 0Z"
              fill="currentColor"
              className="text-red-800 dark:text-teal-300"
            />
          </svg>
        </div>
        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 transform bg-red-800 dark:bg-teal-300" />

        <div className="flex flex-col space-y-8">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
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
                    subtitle={item.company}
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
          })}
        </div>
      </div>
    </div>
  );
}

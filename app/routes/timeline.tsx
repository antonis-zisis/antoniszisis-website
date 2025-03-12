import cn from 'classnames';

import { Card } from '@/components/card';
import { Divider } from '@/components/divider';
import { timelineData } from '@/data/timeline';

export default function Timeline() {
  return (
    <div className="mx-auto flex min-h-screen max-w-(--breakpoint-lg) flex-col items-start">
      <h1 className="pt-28 text-3xl font-semibold text-slate-600 dark:text-slate-200">
        Timeline
      </h1>

      <h2 className="text-lg font-medium text-slate-600 dark:text-slate-400">
        My story in one page
      </h2>

      <Divider />

      <div className="relative w-full py-5">
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
              <div
                key={item.id}
                className={cn('relative flex items-center justify-between', {
                  'flex-row': isEven,
                  'flex-row-reverse': !isEven,
                })}
              >
                <div className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-red-800 dark:bg-teal-300" />

                <div
                  className={cn('w-1/2', {
                    'pr-4': isEven,
                    'pl-4': !isEven,
                  })}
                >
                  <Card
                    title={item.title}
                    subtitle={item.company}
                    description={item.description}
                    tags={item.tags}
                  />
                </div>

                <div
                  className={cn('flex w-1/2', {
                    'justify-start pl-4': isEven,
                    'justify-end pr-4': !isEven,
                  })}
                >
                  <span className="text-sm font-semibold text-red-800 dark:text-teal-300">
                    {item.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

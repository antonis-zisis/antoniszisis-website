import cn from 'classnames';

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

      <div className="relative w-full">
        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 transform bg-red-800 dark:bg-teal-300" />

        <div className="flex flex-col space-y-8">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'relative flex items-center',
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              )}
            >
              <div className={cn('w-1/2', index % 2 === 0 ? 'pr-4' : 'pl-4')}>
                <div className="rounded bg-slate-200 p-4 dark:bg-slate-800">
                  <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-200">
                    {item.title}
                  </h3>

                  <h4 className="text-base text-slate-600 dark:text-slate-400">
                    {item.company}
                  </h4>

                  <p className="mt-3 text-sm font-normal text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <span className="font-semibold text-teal-500">
                    {item.date}
                  </span>
                </div>
              </div>

              <div className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-red-800 dark:bg-teal-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Want animations (e.g., fade-in effects)? I can add Framer Motion!

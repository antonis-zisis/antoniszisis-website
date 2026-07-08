import type { MetaFunction } from 'react-router';

import { Divider } from '@/components/divider';
import { TimelineItem } from '@/components/timeline-item';
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
      <h1 className="pt-8 text-3xl font-semibold text-slate-600 dark:text-slate-200">
        Timeline
      </h1>

      <h2 className="text-lg font-medium text-slate-600 dark:text-slate-400">
        My story in one page
      </h2>

      <Divider />

      <div className="relative w-full pt-10 pb-20">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2">
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
          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} item={item} isEven={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

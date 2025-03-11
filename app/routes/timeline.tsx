import { Divider } from '@/components/divider';

// const timelineData = [
//   { year: '2024', title: 'Software Engineer', company: 'Company A' },
//   { year: '2023', title: 'Frontend Developer', company: 'Company B' },
//   { year: '2022', title: 'Intern', company: 'Company C' },
// ];

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
    </div>
  );
}

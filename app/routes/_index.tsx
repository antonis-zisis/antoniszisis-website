import { useNavigate } from 'react-router';

import { Button } from '@/components/button';
import { CompanyLink } from '@/components/company-link';
import { Accent } from '@/components/typography';

export default function Index() {
  const navigate = useNavigate();

  function onTimelineClick() {
    navigate('/timeline');
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-(--breakpoint-lg) flex-col items-start justify-center">
      <span className="mb-6 font-mono text-lg font-normal">
        <Accent>Hi, my name is</Accent>
      </span>

      <h1 className="mb-2 text-7xl font-semibold text-slate-600 dark:text-slate-200">
        Antonis Zisis.
      </h1>

      <h2 className="mb-10 text-6xl font-semibold text-slate-400">
        Welcome to my website!
      </h2>

      <p className="mb-12 max-w-2xl text-lg font-normal text-slate-600 dark:text-slate-400">
        I&apos;m a Full-Stack Software Engineer from Greece, specializing in
        building web and mobile applications. Currently, I lead a team of seven
        at <CompanyLink />, developing the live events pages for
        <Accent> Stoiximan</Accent> and
        <Accent> Betano</Accent>. Passionate about crafting high-performance
        applications and fostering team growth, I thrive on building seamless
        user experiences and scalable solutions.
      </p>

      <Button onClick={onTimelineClick}>Check out my timeline!</Button>
    </div>
  );
}

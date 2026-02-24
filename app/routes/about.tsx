import type { MetaFunction } from 'react-router';

import { CompanyLink } from '@/components/company-link';
import { Divider } from '@/components/divider';
import {
  BeakerIcon,
  BuildingOfficeIcon,
  HomeIcon,
  StarIcon,
} from '@/components/icon';

export const meta: MetaFunction = () => {
  return [
    { title: 'About | Antonis Zisis' },
    {
      name: 'description',
      content:
        'Learn more about Antonis Zisis — a full-stack software engineer from Greece with over a decade of experience.',
    },
  ];
};

export default function About() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-var(--navbar-height)-var(--footer-height))] max-w-(--breakpoint-lg) flex-col items-start px-6 md:px-0">
      <h1 className="pt-8 text-3xl font-semibold text-slate-600 dark:text-slate-200">
        About Me
      </h1>

      <h2 className="text-lg font-medium text-slate-600 dark:text-slate-400">
        Full-Stack Software Engineer
      </h2>

      <Divider />

      <div className="flex w-full flex-col gap-x-10 text-base text-slate-600 md:flex-row dark:text-slate-400">
        <div className="w-full md:w-1/3">
          <img
            className="mb-6 rounded md:mb-10"
            src="https://res.cloudinary.com/dtywrdtmw/image/upload/v1741703170/antonis/me_2023_zylbnk.jpg"
            alt="My Avatar"
            loading="lazy"
          />

          <div className="mb-6 space-y-2 md:mb-0">
            <div className="flex items-center">
              <BuildingOfficeIcon className="mr-2 size-5" />
              <h3>
                Currently working at <CompanyLink />.
              </h3>
            </div>

            <div className="flex items-center">
              <HomeIcon className="mr-2 size-5" />
              <h3>Living in Kalamata, Greece.</h3>
            </div>

            <div className="flex items-center">
              <BeakerIcon className="mr-2 size-5" />
              <h3>TypeScript, React, Node, fp-ts.</h3>
            </div>

            <div className="flex items-center">
              <StarIcon className="mr-2 size-5" />
              <h3>Gym, Gaming and Movies.</h3>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-5 md:w-2/3">
          <p>
            Hello! I&apos;m Antonis, a software engineer from Kalamata, Greece.
            I hold a B.Sc. in Software Engineering from the University of
            Salford, U.K., and I&apos;ve been working in the industry for over a
            decade. Throughout my career, I&apos;ve contributed to both small
            startups and large corporations, gaining experience across diverse
            environments.
          </p>

          <p>
            I&apos;m passionate about building innovative desktop and mobile
            applications, as well as crafting responsive websites and backend
            systems. I stay up to date with the latest technologies in app and
            web development, always striving to deliver top-tier functionality
            and seamless user experiences. Custom UI design is a priority for
            me, ensuring that every project is both visually appealing and
            user-friendly.
          </p>

          <p>
            My love for software development started back in school when I took
            my first algorithms class - it was love at first sight. Initially, I
            aspired to become a game developer, but life had other plans. While
            searching for opportunities in game development, I was offered an
            exciting role as a web developer at a startup. That decision shaped
            my career, and today, I can&apos;t imagine doing anything else.
          </p>

          <p>
            Currently, I&apos;m a Software Engineering Team Lead at{' '}
            <CompanyLink />, where I lead a team of seven in developing live
            event pages for Stoiximan and Betano. My role involves technical
            decision-making, mentoring, and fostering team growth.
          </p>

          <p>
            Outside of work, I enjoy hitting the gym, playing video games, and
            watching movies. I also love experimenting with new technologies
            through side projects - right now, I&apos;m exploring Effect and
            Lynx.
          </p>
        </div>
      </div>
    </div>
  );
}

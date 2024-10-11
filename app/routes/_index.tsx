import { Link } from '@remix-run/react';

import { Icon } from '@/components/icon';

export default function Index() {
  return (
    <div className="mx-auto w-full max-w-(--breakpoint-lg) px-4 pt-20 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <h1 className="text-5xl font-semibold">Antonis Zisis</h1>
          <h2 className="mt-2 text-lg font-medium">
            Senior Full-Stack Software Engineer
          </h2>

          <div className="my-6 border-b border-slate-800" />

          <div className="space-y-2 text-base text-slate-400">
            <div className="flex items-center">
              <Icon className="mr-2 size-5" name="BuildingOfficeIcon" />
              <h3>
                Currently working at{' '}
                <Link
                  className="font-bold hover:underline"
                  to="https://www.causaly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Causaly
                </Link>
              </h3>
            </div>

            <div className="flex items-center">
              <Icon className="mr-2 size-5" name="HomeIcon" />
              <h3>Living in Kalamata, Greece</h3>
            </div>

            <div className="flex items-center">
              <Icon className="mr-2 size-5" name="BeakerIcon" />
              <h3>TypeScript, React, Node, fp-ts</h3>
            </div>

            <div className="flex items-center">
              <Icon className="mr-2 size-5" name="StarIcon" />
              <h3>Gym, Games and Movies</h3>
            </div>
          </div>

          <div className="mt-10 flex space-x-4 text-slate-400">
            <Link
              to="https://github.com/antonis-zisis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="size-5" name="GitHubIcon" />
            </Link>

            <Link
              to="https://www.linkedin.com/in/antonios-zisis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="size-5" name="LinkedinIcon" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex h-[160px] w-[160px] items-center justify-center self-center rounded-full bg-white text-black">
            AZ
          </div>

          {/* <p className="mt-10">
            My name is Antonis Zisis and I am from Kalamata, Greece. I have a
            B.Sc. degree in Software Engineering from the University of Salford
            in U.K.
          </p> */}

          {/* <p className="mt-4">Bla</p> */}

          {/* <p className="mt-10">
            My name is Theofilos Chamalis and I am from Serres, Greece. I have a
            M.Sc. degree in Computer Science & Engineering with a thesis on Data
            Mining, as well as a Bachelor's degree in Mathematics, both at the
            University of Ioannina in Greece. I have been working as a software
            developer for more than 8 years, including freelance work as well as
            being employed for software based companies like Crowdlinker Inc,
            VieConnect SAS and Terracom Ltd. My passion is developing innovative
            desktop and mobile applications as well as responsive websites and
            backend applications. Using the latest technologies in app & web
            development I aim to incorporate innovation in my work and top of
            the line functionality. Custom UI design suited to each style and
            need is my top priority crafting beautiful user experience for every
            user.
          </p> */}
        </div>
      </div>
    </div>
  );
}

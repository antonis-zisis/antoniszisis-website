import { HoverAnimation } from '@/components/animated';
import { GitHubIcon, LinkedinIcon } from '@/components/icon';
import { Link } from '@/components/link';

export function Footer() {
  return (
    <div className="mx-auto flex h-(--footer-height) max-w-(--breakpoint-lg) items-center justify-between px-6 md:px-0">
      <div className="flex items-center justify-center">
        <span className="text-xs text-slate-600 dark:text-slate-400">
          Copyright © {new Date().getFullYear()} | All rights reserved.
        </span>
      </div>

      <div className="flex gap-5">
        <Link openInNewTab to="https://github.com/antonis-zisis">
          <HoverAnimation>
            <GitHubIcon aria-label="Github link" role="img" />
          </HoverAnimation>
        </Link>

        <Link openInNewTab to="https://www.linkedin.com/in/antonios-zisis/">
          <HoverAnimation>
            <LinkedinIcon aria-label="LinkedIn link" role="img" />
          </HoverAnimation>
        </Link>
      </div>
    </div>
  );
}

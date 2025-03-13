import { HoverAnimation } from '@/components/animated';
import { Icon } from '@/components/icon';
import { Link } from '@/components/link';

export function Footer() {
  return (
    <div className="relative z-10 flex h-20 w-full items-center justify-between px-6 py-0 sm:px-6 md:fixed md:bottom-0 md:px-10 lg:px-20">
      <div className="flex items-center justify-center">
        <span className="text-xs text-slate-600 dark:text-slate-400">
          Copyright © 2025 | All rights reserved.
        </span>
      </div>

      <div className="flex gap-5">
        <Link openInNewTab to="https://github.com/antonis-zisis">
          <HoverAnimation>
            <Icon accessibilityLabel="Github link" name="GitHubIcon" />
          </HoverAnimation>
        </Link>

        <Link openInNewTab to="https://www.linkedin.com/in/antonios-zisis/">
          <HoverAnimation>
            <Icon accessibilityLabel="LinkedIn link" name="LinkedinIcon" />
          </HoverAnimation>
        </Link>
      </div>
    </div>
  );
}

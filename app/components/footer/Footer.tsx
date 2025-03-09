import { HoverAnimation } from '@/components/animated';
import { Icon } from '@/components/icon';
import { Link } from '@/components/link';

export function Footer() {
  return (
    <div className="fixed bottom-0 z-10 flex h-20 w-full items-center justify-end px-20 py-0">
      <div className="flex gap-5">
        <Link openInNewTab to="https://github.com/antonis-zisis">
          <HoverAnimation>
            <Icon name="GitHubIcon" />
          </HoverAnimation>
        </Link>

        <Link openInNewTab to="https://www.linkedin.com/in/antonios-zisis/">
          <HoverAnimation>
            <Icon name="LinkedinIcon" />
          </HoverAnimation>
        </Link>
      </div>
    </div>
  );
}

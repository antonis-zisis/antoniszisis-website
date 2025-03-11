import { Link } from '@/components/link';

export function CompanyLink() {
  return (
    <Link className="group" openInNewTab to="https://kaizengaming.com/home">
      <span className="relative text-red-800 dark:text-teal-300">
        Kaizen
        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-800 transition-all duration-300 group-hover:w-full dark:bg-teal-300" />
      </span>
    </Link>
  );
}

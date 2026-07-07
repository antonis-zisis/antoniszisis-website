import { Link } from '@/components/link';

type Props = {
  link: string;
  text: string;
};

export function CompanyLink({ link, text }: Props) {
  return (
    <Link className="group" openInNewTab to={link}>
      <span className="relative text-red-800 dark:text-teal-300">
        {text}
        <span className="absolute bottom-0 left-0 h-px w-0 bg-red-800 transition-all duration-300 group-hover:w-full dark:bg-teal-300" />
      </span>
    </Link>
  );
}

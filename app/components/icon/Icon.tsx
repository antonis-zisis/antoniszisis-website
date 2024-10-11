import {
  BeakerIcon,
  BuildingOfficeIcon,
  HomeIcon,
  StarIcon,
} from '@heroicons/react/24/solid';

import { GitHub, Linkedin } from 'react-feather';

const HeroIcons = {
  BeakerIcon,
  BuildingOfficeIcon,
  HomeIcon,
  StarIcon,
};

const FeatherIcons = {
  GitHubIcon: GitHub,
  LinkedinIcon: Linkedin,
};

const AllIcons = { ...HeroIcons, ...FeatherIcons };

export type Icons = keyof typeof AllIcons;

type Props = {
  className?: string;
  name: Icons;
};

export function Icon({ className, name }: Props) {
  const SvgIcon = AllIcons[name];

  return <SvgIcon className={className} focusable={false} role="img" />;
}

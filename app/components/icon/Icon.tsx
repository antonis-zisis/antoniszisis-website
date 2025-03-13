import {
  BeakerIcon,
  BuildingOfficeIcon,
  HomeIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { GitHub, Linkedin, Moon, Sun } from 'react-feather';

const HeroIcons = {
  BeakerIcon,
  BuildingOfficeIcon,
  HomeIcon,
  StarIcon,
};

const FeatherIcons = {
  GitHubIcon: GitHub,
  LinkedinIcon: Linkedin,
  MoonIcon: Moon,
  SunIcon: Sun,
};

const AllIcons = { ...HeroIcons, ...FeatherIcons };

export type Icons = keyof typeof AllIcons;

type Props = {
  accessibilityLabel?: string;
  className?: string;
  name: Icons;
};

export function Icon({ accessibilityLabel, className, name }: Props) {
  const SvgIcon = AllIcons[name];

  return (
    <SvgIcon
      className={className}
      focusable={false}
      role="img"
      aria-label={accessibilityLabel}
    />
  );
}

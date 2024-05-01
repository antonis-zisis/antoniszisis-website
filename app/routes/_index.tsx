import type { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Antonis Zisis - Software Engineer' },
    { name: 'description', content: "Antonis Zisis' personal website" },
  ];
};

export default function Index() {
  return <h1 className="flex items-center justify-center">Hello world!</h1>;
}

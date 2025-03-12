type TimelineEntry = {
  id: string;
  title: string;
  company: string;
  description: string;
  date: string;
  tags: Array<string>;
};

export const timelineData = [
  {
    id: 'bsc',
    title: 'BSc. Software Engineering',
    company: 'University of Salford, UK',
    description: 'Graduated with a First class honors degree.',
    date: '2012',
    tags: [],
  },
  {
    id: 'qualtrak',
    title: 'Frontend Engineer',
    company: 'Qualtrak Solutions Ltd.',
    description: 'Worked remotely on an Agile team.',
    date: '2013 - 2018',
    tags: ['React', 'Angular'],
  },
  {
    id: 'agile-actors',
    title: 'Senior Frontend Engineer',
    company: 'Agile Actors',
    description: 'Worked on the Camelot project',
    date: '2018-2020',
    tags: ['React', 'React-Native', 'Angular'],
  },
] satisfies Array<TimelineEntry>;

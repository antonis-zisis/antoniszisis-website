type TimelineEntry = {
  id: string;
  title: string;
  company: string;
  description: string;
  date: string;
  tags: Array<string>;
};

// the order here is important - newest first
export const timelineData = [
  {
    id: 'kaizen',
    title: 'Lead Software Engineer',
    company: 'Kaizen Gaming',
    description:
      'Leading a team of seven in developing live event pages for Stoiximan and Betano across web and native Android and iOS applications.',
    date: 'Nov 2024 - Present',
    tags: ['JavaScript', 'Vue', 'VueX', 'Tailwind', 'Storybook', 'Vite'],
  },
  {
    id: 'causaly',
    title: 'Senior Full-Stack Application Engineer',
    company: 'Causaly',
    description:
      'Led the development of a major collaboration feature, implementing a scalable backend architecture that was later adopted for additional projects. Designed and maintained relational and NoSQL databases, including schema migrations. Developed an internal user management system and a complex system comprising a CLI, cloud functions, and queues for search diffing, results updating, and email notifications. Spearheaded the modernization of 20+ cloud functions by improving deployment processes and addressing security vulnerabilities. Contributed to the company’s component library, built data visualizations, and maintained end-to-end tests. Additionally, participated in hiring by conducting interviews and reviewing code assignments.',
    date: 'May 2019 - Oct 2024',
    tags: [
      'TypeScript',
      'React',
      'RxJS',
      'Node',
      'fp-ts',
      'GraphQL',
      'PostgreSQL',
      'MongoDB',
      'Remix',
      'Tailwind',
      'Zod',
      'D3',
      'Jest',
      'RTL',
      'Storybook',
      'Prisma',
      'Docker',
      'GCP',
    ],
  },
  {
    id: 'agile-actors',
    title: 'Senior Frontend Developer',
    company: 'Agile Actors - Camelot Lottery Solutions',
    description:
      'Collaborated with Agile Scrum teams to develop new features for Camelot, the company’s largest client, while mentoring junior developers through the coaching program. Contributed to the Irish National Lottery Mobile and Web Apps, implementing various features and leading the ID Verification integration. Spearheaded the adoption of Storybook for improved UI component organization. Additionally, optimized the UK National Lottery Mobile App, reducing development build times from over 20 minutes to just 3 minutes.',
    date: 'Jun 2019 - Apr 2021',
    tags: [
      'TypeScript',
      'React',
      'React Native',
      'Redux',
      'Next',
      'Angular',
      'Tailwind',
      'Jest',
      'RTL',
      'Storybook',
    ],
  },
  {
    id: 'qualtrak',
    title: 'Frontend Developer',
    company: 'Qualtrak Solutions Ltd.',
    description:
      'Collaborated with an Agile Scrum team to develop the company’s core application, developing new features, maintaining existing code, and migrating outdated code from Silverlight and jQuery to React. Developed new backend features using microservices architecture with Node.js in AWS Lambda functions.',
    date: 'Sep 2013 - May 2019',
    tags: ['JavaScript', 'React', 'Redux', 'Angular', 'Node', 'AWS'],
  },
  {
    id: 'freelance',
    title: 'Freelancer',
    company: '',
    description:
      'During this time, I took on various freelance IT projects. Among other things, I developed a website for a local physiotherapy center, a website for a gym, and a CRM system for a hair salon.',
    date: 'Aug 2012 - Sep 2013',
    tags: ['WordPress', 'Angular'],
  },
  {
    id: 'bsc',
    title: 'Software Engineering, BSc. (Hons)',
    company: 'University of Salford, UK',
    description:
      'Graduated with First Class (Hons) degree in Software Engineering. Thesis: "XNA Game Studio vs Unity3D: Which is Better for teaching Game Development?".',
    date: 'Sep 2009 - June 2012',
    tags: [],
  },
  {
    id: 'e-discovery',
    title: ' e-Discovery, Certificate',
    company: 'Amsterdam University of Applied Sciences',
    description:
      'Selected among top-performing students from my university class to participate in a certified two-week intensive study program on e-discovery.',
    date: 'Apr 2011',
    tags: [],
  },
  {
    id: 'foundation',
    title: 'Foundation Studies',
    company: 'University of Salford, UK',
    description:
      'Completed foundation studies in Computer Science, Mathematics and English.',
    date: 'Sep 2008 - June 2009',
    tags: [],
  },
  {
    id: 'italy',
    title: 'Computer Engineering',
    company: 'Universita di Genova, Italy',
    description: '',
    date: 'Sep 2007 - Jun 2008',
    tags: [],
  },
  {
    id: 'high-school',
    title: 'High School Diploma',
    company: '4th General Lyceum of Kalamata, Greece',
    description: '',
    date: 'Sep 2003 - June 2006',
    tags: [],
  },
] satisfies Array<TimelineEntry>;

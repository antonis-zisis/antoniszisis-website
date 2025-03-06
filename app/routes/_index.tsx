import { Link } from '@/components/link';

export default function Index() {
  return (
    <div className="mx-auto flex min-h-screen max-w-(--breakpoint-lg) flex-col justify-center">
      <span className="mb-6 font-mono text-lg font-normal text-teal-300">
        Hi, my name is
      </span>

      <h1 className="mb-2 text-7xl font-semibold">Antonis Zisis.</h1>
      <h2 className="mb-10 text-6xl font-semibold text-slate-400">
        Welcome to my website!
      </h2>

      <p className="max-w-2xl text-lg font-normal text-slate-500">
        I’m a Full-Stack Software Engineer from Greece, specializing in building
        web and mobile applications. Currently, I lead a team of seven at{' '}
        <Link to="https://kaizengaming.com/home">Kaizen</Link>, developing the
        live events pages for <span className="text-teal-300"> Stoiximan </span>
        and <span className="text-teal-300">Betano</span>. Passionate about
        crafting high-performance applications and fostering team growth, I
        thrive on building seamless user experiences and scalable solutions.
      </p>
    </div>
  );
}

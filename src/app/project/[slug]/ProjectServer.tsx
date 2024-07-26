import { projects } from '@/lib/data';

export type Project = {
  slug: string
  cover: { img: string }[]
  videoUrl?: string
  from: string
  stack: string[]
  title: string
  url: string
  repo?: string
  did: string[]
};

const getProject = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export { getProject };

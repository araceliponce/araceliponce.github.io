

/* 
necesitas generatestaticparams
necesitas useclient
pero no puedes tener ambos en el mismo archivo
Error: Page "/project/[slug]/page" cannot use both "use client" and export function "generateStaticParams()".
*/

import ClientProjectPage from './ClientProjectPage';
import { projects } from '@/lib/data';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage() {
  return <ClientProjectPage />;
}

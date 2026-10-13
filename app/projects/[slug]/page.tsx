import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {projects} from '@/lib/content';
import {PageIntro} from '@/components/editorial';
import {Gallery} from '@/components/gallery';
import {Enquiry} from '@/components/site';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.title||'Project',description:p?.description}}
export default async function Detail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();return <><PageIntro label={`${p.category.toUpperCase()} / ${p.status.toUpperCase()}`} title={p.title} text={p.description}/><section className="wrap"><div className="gallery-heading"><Link href="/projects" className="text-link">← All projects</Link><span>Open a photograph to explore the details</span></div><Gallery project={p}/></section><Enquiry/></>}

import type {MetadataRoute} from 'next';
import {projects} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||'https://passion-co.vercel.app';return ['','/about','/services','/projects','/contact',...projects.map(p=>`/projects/${p.slug}`)].map(path=>({url:base+path}))}

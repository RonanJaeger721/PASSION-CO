import type {MetadataRoute} from 'next';
import {serviceDetails} from '@/lib/service-details';
import {projects} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||'https://passion-co.vercel.app';return ['','/about','/services','/projects','/contact',...projects.map(p=>`/projects/${p.slug}`),...serviceDetails.map(s=>`/services/${s.slug}`)].map(path=>({url:base+path}))}

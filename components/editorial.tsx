import Image from 'next/image';
import Link from 'next/link';
import {photo,Project} from '@/lib/content';
import {Reveal} from './site';
export function Media({id,alt,className='',priority=false}:{id:number;alt:string;className?:string;priority?:boolean}){return <div className={`media ${className}`}><Image src={photo(id)} alt={alt} fill sizes="(max-width: 768px) 100vw, 60vw" priority={priority}/></div>}
export function PageIntro({label,title,text}:{label:string;title:string;text:string}){return <section className="wrap page-intro"><span className="eyebrow">{label}</span><h1>{title}</h1><p>{text}</p></section>}
export function ProjectCard({project,index=0}:{project:Project;index?:number}){return <Reveal className="project-card"><Link href={`/projects/${project.slug}`}><Media id={project.cover} alt={project.title} priority={index===0}/><div className="project-meta"><span className="eyebrow">{project.category} / {String(index+1).padStart(2,'0')}</span><span>↗</span></div><h3>{project.title}</h3><p>{project.status}</p></Link></Reveal>}

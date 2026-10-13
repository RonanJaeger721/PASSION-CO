'use client';
import Link from 'next/link';
import Image from 'next/image';
import {useRef,useEffect,useState} from 'react';
import {motion,useReducedMotion,useInView} from 'motion/react';
import {photo,services} from '@/lib/content';
import {serviceDetails} from '@/lib/service-details';
function ServiceTile({index}:{index:number}){const ref=useRef<HTMLAnchorElement>(null);const reduced=useReducedMotion();const inView=useInView(ref,{amount:.35,margin:'0px 0px -40px 0px'});const [ready,setReady]=useState(false);useEffect(()=>setReady(true),[]);const visible=!ready||reduced||inView;const s=services[index];return <Link ref={ref} className="service-glimpse-tile" href={`/services/${serviceDetails[index].slug}`}><span className="service-number">0{index+1}</span><div className="service-tile-title"><h3>{s.title}</h3><span className="tile-discover">Explore service</span></div>{s.image!==null?<motion.div className="service-glimpse" initial={false} animate={{clipPath:visible?'inset(0% 0% 0% 0% round 12px)':'inset(0% 58% 0% 0% round 12px)'}} transition={{duration:reduced?0:.7,ease:[.22,1,.36,1]}}><motion.div className="glimpse-photo" initial={false} animate={{y:visible?0:12}} transition={{duration:reduced?0:.8,ease:[.22,1,.36,1]}}><Image src={photo(s.image)} alt={`${s.title} — Passion & Co project detail`} fill sizes="(max-width:600px) 100px, 160px"/></motion.div></motion.div>:<span className="service-glimpse-note">TAILORED<br/>FOR BUSINESS</span>}<span className="tile-arrow">↗</span></Link>}
export function ServiceTiles(){return <div className="service-directory glimpse-directory">{services.map((s,i)=><ServiceTile key={s.title} index={i}/>)}</div>}

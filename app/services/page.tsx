import type {Metadata} from 'next';
import Link from 'next/link';
import {serviceDetails} from '@/lib/service-details';
import {services} from '@/lib/content';
import {PageIntro,Media} from '@/components/editorial';
import {Reveal,Enquiry} from '@/components/site';
export const metadata:Metadata={title:'Cabinetry & Interior Services',description:'Custom kitchen cabinetry, built-in cupboards, walk-in closets, TV stands, painting, tiling, ceilings, aluminium doors and construction in Zimbabwe.'};
export default function Services(){return <><PageIntro label="OUR SERVICES" title="One vision. Every detail." text="From bespoke storage to the finishes around it, we help bring your residential or commercial space together."/><div className="wrap services-page">{services.map((s,i)=><Reveal key={s.title}><section className={`service-detail ${i%2?'reverse':''} ${s.image===null?'text-only':''}`} id={`service-${i+1}`}><div><span className="eyebrow">0{i+1} / PASSION & CO</span><h2>{s.title}</h2><p>{s.text}</p><Link className="text-link" href={`/services/${serviceDetails[i].slug}`}>Explore this service ↗</Link></div>{s.image!==null?<Media id={s.image} alt={s.title===services[0].title?'Fitted timber kitchen cabinetry and peninsula':`Passion & Co ${s.title.toLowerCase()} work`} priority={i===0}/>:<div className="service-note"><span>Spaces that<br/><em>work for you.</em></span><p>Discuss your shop or office requirements with our team.</p></div>}</section></Reveal>)}</div><Enquiry/></>}

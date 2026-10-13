import type {Metadata} from 'next';
import {PageIntro} from '@/components/editorial';
import {QuoteForm} from '@/components/quote-form';
import {FAQs} from '@/components/company-sections';
import {phones} from '@/lib/content';
export const metadata:Metadata={title:'Contact & Request a Quote',description:'Discuss your cabinetry or interior project with Passion & Co. Call or WhatsApp 078 416 4005 or 071 470 5865.'};
export default function Contact(){return <><PageIntro label="LET’S START WITH YOUR VISION" title="Tell us about your space." text="A new kitchen, tailored storage or a complete interior finish. Share your ideas and let’s discuss what comes next."/><section className="wrap contact-layout"><aside><span className="eyebrow">DIRECT ENQUIRIES</span><h2>Let’s talk.</h2><p>Speak to our team about your residential or commercial project in Zimbabwe.</p>{phones.map(p=><div className="contact-number" key={p.number}><a href={`tel:+${p.number}`}>{p.label}</a><div><a href={`tel:+${p.number}`}>Call ↗</a><a href={`https://wa.me/${p.number}`} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div></div>)}<p className="tagline">Where vision meets craftsmanship.</p></aside><QuoteForm/></section><FAQs/></>}

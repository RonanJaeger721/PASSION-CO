import type {Metadata} from 'next';
import {PageIntro} from '@/components/editorial';
import {ProjectFilter} from '@/components/gallery';
import {Enquiry} from '@/components/site';
import {projects} from '@/lib/content';
export const metadata:Metadata={title:'Our Projects',description:'Explore real Passion & Co kitchen cabinetry, wardrobes, TV units and interior installations, including documented work in progress.'};
export default function Projects(){return <><PageIntro label="OUR PROJECTS" title="Craftsmanship, in context." text="Real spaces. Real details. Explore finished installations and follow the work as it takes shape."/><ProjectFilter projects={projects}/><Enquiry/></>}

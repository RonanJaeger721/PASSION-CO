import type {Metadata} from 'next';
import {Navigation, Footer, MotionShell} from '@/components/site';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://passion-co.vercel.app'),title:{default:'Passion & Co | Custom Cabinetry & Interiors Zimbabwe',template:'%s | Passion & Co'},description:'Custom cabinetry, kitchen fittings, built-in cupboards, walk-in closets, floating TV stands and interior contracting in Zimbabwe.',openGraph:{type:'website',siteName:'Passion & Co',images:[{url:'/media/social.jpg',width:1200,height:630}]},twitter:{card:'summary_large_image',images:['/media/social.jpg']}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip" href="#main">Skip to content</a><Navigation/><MotionShell><main id="main">{children}</main></MotionShell><Footer/></body></html>}

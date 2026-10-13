'use client';
import {useState} from 'react';
import Image from 'next/image';
import {photo} from '@/lib/content';
export function Transformation(){const [stage,setStage]=useState(2);const stages=[{id:46,label:'Cabinet fitting'},{id:44,label:'Panels & lighting'},{id:40,label:'Finished room'}];return <div className="transformation"><div className="transformation-image">{stages.map((s,i)=><Image key={s.id} src={photo(s.id)} alt={`Illuminated media wall: ${s.label}`} fill sizes="(max-width:768px) 100vw, 55vw" style={{opacity:i===stage?1:0}}/>)}<span className="image-caption">{String(stage+1).padStart(2,'0')} / {stages[stage].label}</span></div><div className="stage-controls" aria-label="Installation stages">{stages.map((s,i)=><button key={s.id} onClick={()=>setStage(i)} aria-pressed={stage===i}>{s.label}</button>)}</div></div>}

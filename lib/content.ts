export const phones = [{label:'078 416 4005',number:'263784164005'},{label:'071 470 5865',number:'263714705865'}];
export const photo = (id:number) => `/media/image-${String(id).padStart(2,'0')}.webp`;
export const services = [
 {title:'Custom Kitchen Cabinetry',text:'Kitchens shaped around your daily life. Considered storage, fitted cabinetry and carefully coordinated finishes bring function and character together.',image:30},
 {title:'Built-in Cupboards & Walk-in Closets',text:'Make room for everything. Full-height cupboards, tailored shelving and walk-in storage designed to suit your space and the way you use it.',image:41},
 {title:'Floating TV Stands & Entertainment Units',text:'A considered focal point for your living room, combining floating storage, display cabinetry, feature panels and integrated lighting.',image:40},
 {title:'Shop Fittings & Office Partitions',text:'Practical fittings and partitions tailored to your business, with attention to layout, storage and a cohesive professional finish.',image:null},
 {title:'Painting & Tiling',text:'Careful preparation and precise application for walls, ceilings and floors. Finishes that bring the whole room together.',image:18},
 {title:'Ceilings & Interior Finishes',text:'Ceiling installations, feature details and finishing work that give your interior a clean, resolved appearance.',image:34},
 {title:'Aluminium Sliding Doors',text:'Sliding door installations that connect spaces with clean lines, light and practical access.',image:24},
 {title:'General Construction',text:'Construction and alteration work supporting your residential or commercial project, coordinated with the interior vision.',image:23},
];
export type Project = {slug:string; title:string; category:string; status:string; description:string; cover:number; images:number[]; videos:number[]};
export const projects:Project[] = [
 {slug:'warm-timber-kitchen',title:'Warm Timber Kitchen',category:'Cabinetry',status:'Finished cabinetry',description:'Timber-toned cabinetry, a slatted peninsula and pale worktops create a warm, practical kitchen. Pendant lighting highlights the natural rhythm of the joinery.',cover:30,images:[30,27,28],videos:[]},
 {slug:'illuminated-media-wall',title:'Illuminated Media Wall',category:'TV units',status:'Finished installation',description:'A timber feature wall framed by illuminated glass display cabinets and floating storage. Follow the supplied photographs from the first cabinet placement to the fitted room.',cover:40,images:[40,42,47,43,46,48,44,45],videos:[]},
 {slug:'full-height-wardrobes',title:'Full-height Wardrobe & Storage',category:'Wardrobes',status:'Installation story',description:'Glass-fronted wardrobes, illuminated timber interiors and fitted storage. This collection records construction, door fitting and later installation stages; final handover is not documented.',cover:41,images:[41,39,1,37,9,10,20,13,11,16,14,15,21],videos:[0, 1, 6, 8, 14, 15, 16, 17, 19, 20]},
 {slug:'marble-effect-tv-wall',title:'Custom TV Wall Installation',category:'TV units',status:'Installation in progress',description:'From the original room to cabinetry construction, marble-effect panels, slatted details and lighting. The supplied series shows the installation progressing, rather than a completed handover.',cover:8,images:[8,2,3,4,5,6,7],videos:[2, 3, 4, 5]},
 {slug:'white-and-timber-kitchen',title:'White & Timber Kitchen',category:'Cabinetry',status:'Cabinetry fitted · finishing stages',description:'White cabinetry pairs with timber slats and illuminated display storage. The cabinetry is fitted in these photographs, while ceiling and other finishing details remain in progress.',cover:32,images:[32,29,31,33],videos:[]},
 {slug:'sculpted-ceiling-living-room',title:'Living Room & Ceiling Details',category:'Interior finishes',status:'Later installation stages',description:'Sculpted ceiling forms, recessed lighting and a fitted entertainment wall. See the assembly and later installation stages captured by the team.',cover:34,images:[34,36,35,38],videos:[10, 12]},
 {slug:'door-and-room-alterations',title:'Door & Room Alterations',category:'Interior finishes',status:'Work in progress',description:'Opening alterations, aluminium door fitting, painting preparation and finishing work documented on site.',cover:24,images:[24,23,25,26,22,12,17,18,19],videos:[7, 9, 11, 13, 18]},
];

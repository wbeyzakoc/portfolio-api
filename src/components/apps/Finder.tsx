import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ViewMode = "icons" | "list";

interface FileItem {
  id: string;
  name: string;
  kind: "folder" | "file";
  ext?: string;
  image?: string;
   video?: string;
  content?: string;
  children?: FileItem[];
}


// ================= FILE SYSTEM =================

const FILESYSTEM: FileItem[] = [
  {
    id: "projects",
    name: "Projects",
    kind: "folder",

    children: [

      {
        id: "career",
        name: "AI Career Assistant",
        kind: "folder",

        children: [

          {
            id:"career-1",
            name:"Dashboard.png",
            kind:"file",
            ext:"png",
            image:"/img/myphoto/career1.jpg"
          },

          {
            id:"career-2",
            name:"CV Analysis.png",
            kind:"file",
            ext:"png",
            image:"/img/myphoto/career2.jpg"
          },

          {
            id:"career-3",
            name:"Analytics.png",
            kind:"file",
            ext:"png",
            image:"/img/myphoto/career3.jpg"
          },


          {
            id:"career-readme",
            name:"README.md",
            kind:"file",
            ext:"md",

            content:`
# AI Career Assistant

Bu proje iş ve staj başvurularını takip etmek için geliştirildi.

## Özellikler

- Google OAuth ile giriş
- Gmail API entegrasyonu
- CV analizi
- AI destekli iş önerileri
- Beceri uyum skoru
- Başvuru takip sistemi


## Kullanılan Teknolojiler

Frontend:
- Next.js
- TypeScript
- TailwindCSS

Backend:
- FastAPI
- SQLAlchemy

Database:
- PostgreSQL

AI:
- OpenAI API
`
          }

        ]
      },



      {
        id:"rps",
        name:"AI Rock Paper Scissors",
        kind:"folder",

        children:[

          {
            id:"rps-1",
            name:"Prediction.png",
            kind:"file",
            ext:"png",
             image:"/img/myphoto/rps1.jpg"
          },

          {
            id:"rps-2",
            name:"Prediction.png",
            kind:"file",
            ext:"png",
             image:"/img/myphoto/rps2.jpg"

          },

          {
            id:"rps-3",
            name:"Prediction.png",
            kind:"file",
            ext:"png",
             image:"/img/myphoto/rps3.jpg"
          },



          {
            id:"rps-readme",
            name:"README.md",
            kind:"file",
            ext:"md",

            content:`
# AI Rock Paper Scissors

YOLOv8 kullanılarak gerçek zamanlı el hareketi tanıma sistemi geliştirildi.

## Teknolojiler

- Python
- YOLOv8
- OpenCV
- Computer Vision
`
          }

        ]
      },



      {
        id:"oraldent",
        name:"OralDent Website",
        kind:"folder",

        children:[

          {
            id:"oral-home",
            name:"Homepage.png",
            kind:"file",
            ext:"mp4",
          video:"/img/myphoto/oraldent.mp4"
          },


          {
            id:"oral-readme",
            name:"README.md",
            kind:"file",
            ext:"md",

            content:`
# OralDent Website

Modern diş kliniği web sitesi tasarımı.

Responsive ve kullanıcı dostu arayüz geliştirildi.
`
          }

        ]
      },



      {
        id:"treasure",
        name:"Treasure Hunt Adventure",
        kind:"folder",

        children:[

          {
            id:"treasure-game",
            name:"Game Screen.png",
            kind:"file",
            ext:"png",
             image:"/img/myphoto/hunt1.jpg"
          },
   {
            id:"treasure-game2",
            name:"Game Screen.png",
            kind:"file",
            ext:"png",
             image:"/img/myphoto/hunt2.jpg"
          },
             {
            id:"treasure-game3",
            name:"Game Screen.png",
            kind:"file",
            ext:"png",
             image:"/img/myphoto/hunt3.jpg"
          },

          {
            id:"treasure-readme",
            name:"README.md",
            kind:"file",
            ext:"md",

            content:`
# Treasure Hunt Adventure

Java Swing kullanılarak geliştirilen macera oyunu.

Kullanılan yapılar:

- Linked List
- Binary Search Tree
- OOP
- Java Swing
`
          }

        ]
      },



      {
        id:"kilowizard",
        name:"Kilowizard Teknofest 2025",
        kind:"folder",

        children:[

          {
            id:"kilo-wizard",
            name:"System.png",
            kind:"file",
            ext:"png",
               image:"/img/myphoto/tekno.jpg"
          },
           {
            id:"kilowizard-readme",
            name:"README.md",
            kind:"file",
            ext:"md",

            content:`
# Takım olarak 2025 TEKNOFEST Sosyal İnovasyon Yarışması Üniversite ve Üzeri Seviyesi kategorisinde KiloWizard Projesi ile Proje Sunumu aşamasını başarıyla geçerek finalist olduk! 
`
          }

        ]
      }

    ]
  }
];



// ================= ICON =================


const FileIcon = ({
 item,
 size=52
}:{
 item:FileItem;
 size?:number;
})=>{


if(item.kind==="folder"){

return(
<img

src="/img/icons/folder-generic.png"

style={{
width:size,
height:size,
objectFit:"contain"
}}

/>
)

}



if(item.ext==="md"){

return(
<img

src="/img/icons/codefile.png"

style={{
width:size,
height:size,
objectFit:"contain"
}}

/>
)

}

if(item.video){

return(

<div
style={{
width:size,
height:size,
position:"relative"
}}
>

<video

src={item.video}

style={{
width:"100%",
height:"100%",
objectFit:"cover",
borderRadius:8
}}

/>


<div

style={{

position:"absolute",
inset:0,
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:20,
color:"#fff"

}}

>

▶

</div>


</div>

)

}

if(item.image){

return(
<img

src={item.image}

style={{
width:size,
height:size,
objectFit:"cover",
borderRadius:8
}}

/>
)

}



return(
<img

src="/img/icons/codefile.png"

style={{
width:size,
height:size,
objectFit:"contain"
}}

/>
)

};



// ================= FINDER =================


export default function Finder(){


const [path,setPath]=useState<FileItem[]>([
FILESYSTEM[0]
]);


const [view,setView]=useState<ViewMode>("icons");


const [selected,setSelected]=useState<string|null>(null);


const [search,setSearch]=useState("");


const [preview,setPreview]=useState<FileItem|null>(null);



const currentFolder =
path[path.length-1];


let items=currentFolder.children ?? [];



if(search){

items=items.filter(item=>

item.name
.toLowerCase()
.includes(search.toLowerCase())

)

}



const openFolder=(item:FileItem)=>{

if(item.kind==="folder"){

setPath([
...path,
item
]);

}

};



const back=()=>{

if(path.length>1){

setPath(
path.slice(0,-1)
)

}

};



 return (

<div

style={{

height:"100%",
display:"flex",
flexDirection:"column",
background:"rgba(245,245,247,.96)",
borderRadius:14,
overflow:"hidden"

}}

>


{/* TOOLBAR */}

<div

style={{

height:42,
display:"flex",
alignItems:"center",
gap:10,
padding:"0 12px",
borderBottom:"1px solid #ddd",
background:"#f5f5f7"

}}

>


<button

onClick={back}

disabled={path.length===1}

style={{

border:"none",
background:"transparent",
fontSize:22,
cursor:"pointer"

}}

>

‹

</button>



<div

style={{

flex:1,
textAlign:"center",
fontWeight:600,
fontSize:13

}}

>

{currentFolder.name}

</div>



<button

onClick={()=>setView("icons")}

style={{
border:"none",
background:"transparent",
fontSize:18
}}

>

⊞

</button>



<button

onClick={()=>setView("list")}

style={{
border:"none",
background:"transparent",
fontSize:18
}}

>

≡

</button>



<input

placeholder="Search"

value={search}

onChange={(e)=>setSearch(e.target.value)}

style={{

background:"rgba(0,0,0,.08)",
border:"none",
borderRadius:8,
padding:"5px 10px",
width:120

}}

/>


</div>





{/* BREADCRUMB */}


<div

style={{

padding:"6px 12px",
fontSize:12,
borderBottom:"1px solid #ddd"

}}

>


{
path.map((p,i)=>(

<React.Fragment key={p.id}>


<span

onClick={()=>setPath(path.slice(0,i+1))}

style={{

cursor:"pointer",
color:i===path.length-1
?"#000"
:"#007AFF"

}}

>

{p.name}

</span>


{i!==path.length-1 && " › "}


</React.Fragment>

))
}


</div>






{/* CONTENT */}


<div

style={{

flex:1,
overflow:"auto"

}}

>


{
view==="icons" ?


<div

style={{

display:"grid",
gridTemplateColumns:"repeat(auto-fill,100px)",
gap:18,
padding:20

}}

>


{

items.map(item=>(


<motion.div

key={item.id}


whileHover={{
scale:1.05
}}



onClick={()=>{


setSelected(item.id);


if(item.image || item.video || item.content){
 setPreview(item);
}


}}



onDoubleClick={()=>{


if(item.kind==="folder"){

openFolder(item);

}

else if(item.content){

setPreview(item);

}


}}


style={{

display:"flex",
flexDirection:"column",
alignItems:"center",
padding:10,
borderRadius:10,
cursor:"pointer",

background:

selected===item.id

?

"rgba(0,122,255,.18)"

:

"transparent"

}}

>


<FileIcon

item={item}

size={55}

/>


<span

style={{

fontSize:11,
marginTop:6,
maxWidth:90,
overflow:"hidden",
textOverflow:"ellipsis",
whiteSpace:"nowrap"

}}

>

{item.name}

</span>


</motion.div>


))


}


</div>



:


<div>


{

items.map(item=>(


<div

key={item.id}


onClick={()=>{


setSelected(item.id);


if(item.image || item.content){

setPreview(item);

}


}}


onDoubleClick={()=>{


if(item.kind==="folder"){

openFolder(item);

}

else if(item.content){

setPreview(item);

}

}}



style={{

display:"flex",
alignItems:"center",
gap:10,
padding:"8px 15px",
cursor:"pointer"

}}

>


<FileIcon

item={item}

size={24}

/>


<span>

{item.name}

</span>


</div>


))

}


</div>

}


</div>







{/* PREVIEW */}


<AnimatePresence>


{

preview &&

<motion.div


initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}



onClick={()=>setPreview(null)}



style={{

position:"fixed",
inset:0,
background:"rgba(0,0,0,.65)",
display:"flex",
alignItems:"center",
justifyContent:"center",
zIndex:9999

}}

>



{/* IMAGE */}


{

preview.image &&

<motion.img


src={preview.image}


initial={{
scale:.7
}}


animate={{
scale:1
}}


transition={{
duration:.25
}}



onClick={(e)=>e.stopPropagation()}



style={{

maxWidth:"55vw",
maxHeight:"55vh",
borderRadius:18,
boxShadow:
"0 20px 70px rgba(0,0,0,.5)"

}}


/>

}

{/* VIDEO */}

{
preview.video &&

<video

src={preview.video}

controls
autoPlay

onClick={(e)=>e.stopPropagation()}

style={{

maxWidth:"80vw",
maxHeight:"80vh",
borderRadius:18,
boxShadow:
"0 20px 70px rgba(0,0,0,.5)"

}}

/>

}



{/* README */}


{

preview.content &&


<motion.div


initial={{
scale:.7
}}

animate={{
scale:1
}}

transition={{
duration:.25
}}



onClick={(e)=>e.stopPropagation()}



style={{

width:"600px",
maxWidth:"45vw",
maxHeight:"70vh",
overflowY:"auto",
background:"#fff",
padding:"80px",
borderRadius:20,
boxShadow:
"0 20px 70px rgba(0,0,0,.5)",
fontSize:15,
lineHeight:1.7,
color:"#111"

}}

>


<pre

style={{

whiteSpace:"pre-wrap",
fontFamily:"inherit",
margin:0

}}

>

{preview.content}

</pre>


</motion.div>


}



</motion.div>

}


</AnimatePresence>


</div>

)

}

import { useRef } from 'react'; 
import React from 'react';
import Card from './Card'

function Foreground() {
  const ref = useRef (null);

  const data =[
    {
      desc:"This is the first Card which is made of react",
      filesize:".9mb",
      close:false,
      tag:{ isOpen: true, tagTitle:"DownloadNow",tagColor:"green"},
    },
    {
      desc:"This is the first Card which is made of react",
      filesize:".9mb",
      close:false,
      tag:{ isOpen: true, tagTitle:"Upload",tagColor:"blue"},
    },
    {
      desc:"This is the first Card which is made of react",
      filesize:".9mb",
      close:false,
      tag:{ isOpen: true, tagTitle:"DownloadNow",tagColor:"green"},
    },
  ];
  return (
    
        <div  ref={ref}className="fixed  top-0 left=0 z-[3] w-full h-full flex flex-wrap">
{data.map((item,index)=>(
<Card data={item} refernce={ref}/>
))}
       
        </div>
  
  );
}

export default Foreground

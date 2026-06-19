import React from 'react'
import Herosection from '@/components/Herosection'
import Cardsection from '@/components/Cardsection'
import Footersection from '@/components/Footersection'

export default function Home() {
  const navStyle = {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "0.3s",
  };

   return (
     <div>
     <Herosection />
     <Cardsection />
     <Footersection />
     </div>
   )
 }
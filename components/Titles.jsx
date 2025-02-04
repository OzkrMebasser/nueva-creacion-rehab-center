import React from 'react'
import { Dancing_Script } from "next/font/google";
import { title } from 'process';
import "../app/globals.css";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-dancing-script",
    display: "swap",
  });
  
const Titles = ({title, fsz, lgFsz, textColor}) => {
  return (
    <>
         <h2 className={`${fsz} ${lgFsz}font-bold  ${textColor} ${dancingScript.variable} font-dancing-script`}>
            {title}
          </h2>
    </>
  )
}

export default Titles
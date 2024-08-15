import { useState, useEffect } from "react";

interface StudiesProps {
  schoolName: string;
  schoolImageURL: string;
  duration: string;
  description: string[];
  degree: string
  imagePadding: string
}


const School = (studies: StudiesProps) => {


  return (

    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700"><img src={studies.schoolImageURL} alt="Revolutionizing Our Production Process" className={`object-scale-down w-full h-full p-${studies.imagePadding}`} /></div>
      <div className="p-6 px-2 sm:pr-6 sm:pl-4">
        <div className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">{studies.duration}</div>
        <div className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">{studies.schoolName}</div>
        <a href="#" className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">{studies.degree}</a>
        <div className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
          <div>
            {studies.description.map((line, index) => (
              <p key={index}>{line.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default School;

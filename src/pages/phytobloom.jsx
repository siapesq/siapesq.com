import React from "react";
import SectionHeader from "../components/sections/phytobloomHeader";
import SectionPlanta from "../components/sections/phytobloomPlanta";
import SectionYoutube from "../components/sections/phytobloomyoutube.jsx";
import SectionPlataforma from "../components/sections/phytobloomPlataforma.jsx";
import SectionForm from "../components/sections/phytobloomForm.jsx";
import SectionFooter from "../components/sections/phytobloomFooter.jsx";




export default function Phytobloom() {


    return (
        <>
           <div>
                <SectionHeader />
           </div>
          
           <div>
                <SectionPlanta />
           </div>

           <div>
                <SectionYoutube />
           </div>

           <div>
                < SectionPlataforma />
           </div>

           <div>
                <SectionForm />
           </div>
           
            <div>
                <SectionFooter />
           </div>
        </>
    )
}
import React from "react";
import SectionHeader from "../components/sections/phytobloomHeader";
import SectionPlanta from "../components/sections/phytobloomPlanta";
import SectionYoutube from "../components/sections/phytobloomyoutube.jsx";
import SectionPlataforma from "../components/sections/phytobloomPlataforma.jsx";
import SectionForm from "../components/sections/phytobloomForm.jsx";
import SectionFooter from "../components/sections/phytobloomFooter.jsx";
import "../style/animationWord.css"
import "../style/opacityZero.css"



export default function Phytobloom() {
     

    return (
        <div className="animated fade-in">
           <div>
                <SectionHeader/>
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
        </div>
    )
}
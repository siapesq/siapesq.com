import React from "react";
import SectionHeader from "../components/sections/siaprepsHeader";
import SectionBarco from "../components/sections/siaprepsBarco";
import SectionPlataforma from "../components/sections/siaprepsPlataforma";
import SectionCardume from "../components/sections/siaprepsCardume";
import SectionformS from "../components/sections/siaprepsFormS";
import SectionFooter from "../components/sections/siaprepsFooter";


export default function Index(){

    
    return(
        <>
                <div>
                <SectionHeader />
                </div>

                <div >
                <SectionBarco />
                </div>
           

                <div >
                <SectionPlataforma />
                </div>

                <div >
                <SectionCardume />
                </div>

                <div >
                <SectionformS />
                </div>
                     
                <div >
                <SectionFooter />
                </div>
        </>
    )
}
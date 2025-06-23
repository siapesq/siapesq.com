import React from "react";
import SectionHeader from "../components/sections/siaprepsHeader";
import SectionBarco from "../components/sections/siaprepsBarco";
import SectionPlataforma from "../components/sections/siaprepsPlataforma";
import SectionCardume from "../components/sections/siaprepsCardume";
import SectionformS from "../components/sections/siaprepsFormS";
import SectionFooter from "../components/sections/siaprepsFooter";


export default function Index() {


    return (
        <>
            <SectionHeader />
            <SectionBarco />
            <SectionPlataforma />
            <SectionCardume />
            <SectionformS />
            <SectionFooter />

        </>
    )
}
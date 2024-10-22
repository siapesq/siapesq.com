import React from "react";
import '../../style/about/cards.css';
import AboutCard from "../common/aboutCard";

import Talles from "../../imgs/Talles.svg";
import Patrick from '../../imgs/patrick2.png';
import Hugo from  '../../imgs/hugo2.png';
import Bruno from '../../imgs/bruno2.png';

export default function SectionHead() {
    return (
        <>
            <div className="cards">

                <AboutCard className="card" content={{
                    title: "Talles",
                    tag: "CEO",
                    img: Talles,
                    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
                }} />
                <AboutCard className="card cardR" content={{
                    title: "Talles",
                    tag: "CEO",
                    img: Patrick,
                    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
                }} />
                <AboutCard className="card" content={{
                    title: "Talles",
                    tag: "CEO",
                    img: Bruno,
                    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
                }} />
                <AboutCard className="card cardR" content={{
                    title: "Talles",
                    tag: "CEO",
                    img: Hugo,
                    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
                }} />

                {/* <div className="card">
                    <img className="equipe2" src={Talles} alt="Talles" />

                    <div>
                        <h1 className="cargo">Talles <sup>CEO</sup></h1>
                        <p className="lorem">Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    </div>
                </div>

                <div className="card cardR">
                    <img className="equipe2" src={Talles} alt="talles" />
                    <div>
                        <h1 className="cargo"><span>CEO</span> Talles</h1>
                        <p className="forem">Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}



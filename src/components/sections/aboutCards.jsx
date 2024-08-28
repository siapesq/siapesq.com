import React from "react";
import Talles from "../../imgs/Talles.svg";
import '../../style/about/cards.css';

export default function SectionHead() {
    return (
        <>           
<div className="cards">
<div className="card1">
    <img className="equipe2" src={Talles} alt="Talles" />
    <h1 className="cargo">Talles CEO</h1>
    <p className="lorem">Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
</div>

<div className="card2">
    <p className="lorem">Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
    <h1 className="cargo">CEO Talles</h1>
    <img className="equipe2" src={Talles} alt="talles" />
</div>
</div>
        </>
    );
}



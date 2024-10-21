import React from 'react';
import '../../style/equipe/carrosel.css';

import Talles from "../../imgs/Talles.svg";
import Patrick from "../../imgs/patrick.png";
import Bruno from "../../imgs/bruno.png";
import Hugo from "../../imgs/Hugo.png";

function Carrosel({ membros }) {

    // const max = ((membros.length/6) * 1500);
    let maxClicks= 1;

    const effect = () => {
        const membro1 = document.querySelector('.membroEquipe:first-child');
        const computedStyle = getComputedStyle(membro1);
        const marginAtual = parseInt(computedStyle.marginLeft);

        maxClicks++;

        // console.log(max, marginAtual, Math.abs(marginAtual) >= max)

        // if(Math.abs(marginAtual) >= 1500){
        //     membro1.style.marginLeft=`0px`;    
        //     return;
        // }

        if(maxClicks>membros.length/6){
            membro1.style.marginLeft=`0px`;
            maxClicks=1;
            return;
        }

        console.log(computedStyle.width);
        membro1.style.marginLeft= `${marginAtual - parseInt(computedStyle.width) * 6}px`;
    }    
    
    return (
        <div className="carrossel">
            <button className="arrow left" onClick={effect}>
                &#8249;
            </button>

            <ul>
                {membros.map(({ nome, cargo, img }, ind) => {
                    return (
                        <li className='membroEquipe' key={ind}>
                            <img src={img} alt={nome} />
                            <p className='nome'>{nome}</p>
                            <p className='cargo'>{cargo}</p>
                        </li>
                    );
                })}
            </ul>
            <button className="arrow right" onClick={effect}>
                &#8250;
            </button>
        </div>
    );
}

function CarrosselEquipe() {
    
    return (
        <div className="carrosselEquipe">
            <h2 className="teamTitle">Conheça nossa equipe!</h2>
            <Carrosel membros={
                [
                    { nome: "Talles", img: Talles, cargo: "CEO & Founder" },
                    { nome: "Patrick", img: Patrick, cargo: "Leader Team & Dev" },
                    { nome: "Bruno", img: Bruno, cargo: "Leader Team & Dev" },
                    { nome: "Hugo", img: Hugo, cargo: "Leader Team & Designer" },
                    { nome: "Talles", img: Talles, cargo: "Leader Team & Dev" },
                    { nome: "Hugo", img: Hugo, cargo: "Leader Team & Designer" },
                    { nome: "Patrick", img: Patrick, cargo: "Leader Team & Dev" },
                    { nome: "Hugo", img: Hugo, cargo: "Leader Team & Designer" },
                    { nome: "Patrick", img: Patrick, cargo: "Leader Team & Dev" },
                    { nome: "Bruno", img: Bruno, cargo: "Leader Team & Dev" },
                    { nome: "Bruno", img: Bruno, cargo: "Leader Team & Dev" },
                    { nome: "Patrick", img: Patrick, cargo: "Leader Team & Dev" }
                ]
            } />

            <button className='botao'> <a href="#">Saiba Mais</a> </button>
        </div>
    );
};

export default CarrosselEquipe;




// const prevSlide = () => {
//     const membro1 = document.querySelector('.membroEquipe:first-child');
//     const computedStyle = getComputedStyle(membro1);
//     const marginAtual = parseInt(computedStyle.marginLeft);
//     console.log(max, marginAtual, Math.abs(marginAtual) === max)
//     if(Math.abs(marginAtual)>=max){
//         membro1.style.marginLeft=`0px`;    
//         return;
//     }
//     membro1.style.marginLeft= `${marginAtual - 1500}px`;
//  };
// const nextSlide = () => {
//     const membro1 = document.querySelector('.membroEquipe:first-child');
//     const computedStyle = getComputedStyle(membro1);
//     const marginAtual = parseInt(computedStyle.marginLeft);
//     console.log(max, marginAtual, Math.abs(marginAtual) === max)
//     if(Math.abs(marginAtual)>=max){
//         membro1.style.marginLeft=`0px`;    
//         return;
//     }
//     membro1.style.marginLeft= `${marginAtual - 1500}px`;
//  };
import React from "react";

export default function Card({id,photo,title,content}){
    return(
        <section id={id} className="card">
            <img src={photo} alt="foto descritiva"/>
            <h2 className="title">
                {title}
            </h2>
            <p className="content">
                {content}
            </p>
        </section>
    )
}
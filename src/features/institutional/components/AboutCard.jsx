import React from "react";

export default function AboutCard({ content, className }) {
    return (
        <div className={className}>
            <img className="equipe2" src={content.img} alt="Talles" />

            <div>
                <h1 className="cargo"> {content.title} <span>{content.tag}</span> </h1>
                <p className="lorem">{content.text}</p>
            </div>
        </div>
    );
}
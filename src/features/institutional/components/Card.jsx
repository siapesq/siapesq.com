import React from "react";
import { useTranslation } from "react-i18next";

export default function Card({id,photo,title,content}){
    const { t } = useTranslation();
    return(
        <section id={id} className="card">
            <div>
                <img src={photo} alt={t("common.cardPhotoAlt")}/>
            </div>
            <h2 className="title">
                {title}
            </h2>
            <p className="content">
                {content}
            </p>
        </section>
    )
}

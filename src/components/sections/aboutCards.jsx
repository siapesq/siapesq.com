import React from "react";
import { useTranslation } from "react-i18next";
import '../../style/about/cards.css';
import AboutCard from "../common/aboutCard";

import Talles from "../../imgs/Talles.svg";
import Patrick from '../../imgs/patrick2.png';
import Hugo from  '../../imgs/hugo2.png';
import Bruno from '../../imgs/bruno2.png';

export default function SectionHead() {
    const { t } = useTranslation();
    return (
        <>
            <div className="cards">

                <AboutCard className="card" content={{
                    title: "Talles",
                    tag: t("team.roleCeoFounder"),
                    img: Talles,
                    text: t("about.member1Bio")
                }} />
                <AboutCard className="card cardR" content={{
                    title: "Patrick",
                    tag: t("team.roleDev"),
                    img: Patrick,
                    text: t("about.member2Bio")
                }} />
                <AboutCard className="card" content={{
                    title: "Bruno",
                    tag: t("team.roleDev"),
                    img: Bruno,
                    text: t("about.member3Bio")
                }} />
                <AboutCard className="card cardR" content={{
                    title: "Hugo",
                    tag: t("team.roleDesigner"),
                    img: Hugo,
                    text: t("about.member4Bio")
                }} />

            </div>
        </>
    )
}

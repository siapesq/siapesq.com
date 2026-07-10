import React from "react";
import { useTranslation } from "react-i18next";
import '../../style/phytobloom/youtube.css';


export default function SectionYoutube() {

  const { t } = useTranslation();

  return (
    <>

      <section className="video">
        <h1>{t("phytobloom.youtubeTitle")}</h1>
        <p><iframe width="90%" height="800px" src="https://www.youtube.com/embed/QWzZbOT9eRw?si=doZaJVB7qHK8pK17" title={t("phytobloom.youtubeIframeTitle")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
        <h1>{t("phytobloom.youtubeDemo")}</h1>
      </section>

    </>
  )
}

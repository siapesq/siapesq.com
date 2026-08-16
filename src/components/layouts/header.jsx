import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/siapesqlogo.svg";
import logoBranca from "../../imgs/siapesqLogoB.png";
import "../../style/styles/header.css"

const NAV_ITEMS = [
    { to: "/plataforma", label: "PLATAFORMA" },
    { to: "/siapreps", label: "SIAPREPS" },
    { to: "/phytobloom", label: "PHYTOBLOOM" },
    { href: "https://www.instagram.com/siapesq", label: "SOBRE NÓS" },
    { to: "/contato", label: "CONTATO" },
];

// no desktop a logo fica no MEIO da nav (3 links, logo, 2 links) — por isso
// a lista é dividida aqui só pra essa fileira; o menu mobile usa NAV_ITEMS
// inteiro, em ordem, sem essa divisão.
const NAV_ANTES_LOGO = NAV_ITEMS.slice(0, 3);
const NAV_DEPOIS_LOGO = NAV_ITEMS.slice(3);

function NavItemLink({ item }) {
    return item.to ? (
        <NavLink to={item.to} className="links">
            {item.label}
        </NavLink>
    ) : (
        <a href={item.href} className="links" target="_blank" rel="noopener noreferrer">
            {item.label}
        </a>
    );
}

export default function Header({page=''}) {
    const [menuAberto, setMenuAberto] = useState(false);

    // Trava o scroll do body e fecha no Esc enquanto o menu estiver aberto —
    // mesmo padrão já usado no <Lightbox>.
    useEffect(() => {
        if (!menuAberto) return;

        const aoTeclar = (e) => {
            if (e.key === "Escape") setMenuAberto(false);
        };
        document.addEventListener("keydown", aoTeclar);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", aoTeclar);
            document.body.style.overflow = "";
        };
    }, [menuAberto]);

    const fechar = () => setMenuAberto(false);

    return (
        <header className={`header ${page}`}>
            <nav>
                <ul>
                    {NAV_ANTES_LOGO.map((item) => (
                        <NavItemLink key={item.label} item={item} />
                    ))}

                    <NavLink to={"/"}>
                        <img src={logo} alt="Logo da siapesq na coloração azul" className="logoAzul"/>
                        <img src={logoBranca} alt="Logo da siapesq na branca" className="logoBranca"/>
                    </NavLink>

                    {NAV_DEPOIS_LOGO.map((item) => (
                        <NavItemLink key={item.label} item={item} />
                    ))}

                    <button
                        type="button"
                        className="menu_hamburguer"
                        aria-label="Abrir menu"
                        aria-expanded={menuAberto}
                        onClick={() => setMenuAberto(true)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </ul>

                {menuAberto &&
                    createPortal(
                        <div
                            className="menu_overlay"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Menu de navegação"
                            onClick={fechar}
                        >
                            <img src={logoBranca} alt="SIAPESQ" className="menu_logo" />

                            <button
                                type="button"
                                className="menu_fechar"
                                aria-label="Fechar menu"
                                onClick={fechar}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                >
                                    <path d="M6 6l12 12M18 6 6 18" />
                                </svg>
                            </button>

                            <div className="menu_painel" onClick={(e) => e.stopPropagation()}>
                                <ul className="menu_lista">
                                    {NAV_ITEMS.map((item) => (
                                        <li key={item.label}>
                                            {item.to ? (
                                                <NavLink to={item.to} onClick={fechar}>
                                                    {item.label}
                                                </NavLink>
                                            ) : (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={fechar}
                                                >
                                                    {item.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>,
                        document.body
                    )}
            </nav>
        </header>
    )
}

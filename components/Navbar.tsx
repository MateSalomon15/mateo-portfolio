"use client";

import { useEffect, useState } from "react";

const links = [
    { id: "inicio", label: "Inicio" },
    { id: "acerca", label: "Acerca de mí" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
    const [active, setActive] = useState("inicio");

    // set activo según hash al cargar
    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (links.some((l) => l.id === hash)) setActive(hash);
    }, []);

    // activo según scroll 
    useEffect(() => {
        const getTop = (id: string) => {
            const el = document.getElementById(id);
            if (!el) return Number.POSITIVE_INFINITY;
            return el.getBoundingClientRect().top + window.scrollY;
        };

        const onScroll = () => {
            // offset para compensar navbar fija
            const offset = 140; 
            const y = window.scrollY + offset;

            // Tomamos solo secciones que existan
            const existing = links
                .map((l) => ({ ...l, top: getTop(l.id) }))
                .filter((l) => Number.isFinite(l.top));

            // Si solo están inicio/acerca, igual funciona.
            // Elegimos la última sección cuyo top esté por debajo del scroll actual.
            let current = existing[0]?.id ?? "inicio";
            for (const s of existing) {
                if (y >= s.top) current = s.id;
            }
            setActive(current);
        };

        onScroll(); // set inicial
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0b0b0f]/80 backdrop-blur-md">      
        <nav className="mx-auto w-full max-w-7xl px-6 md:px-10 py-4 flex justify-between items-center">
            <a
                href="#inicio"
                className="text-lg font-semibold tracking-wide text-white"
            >
                Mateo Salomon
            </a>

            <div className="flex gap-8 text-base md:text-lg">
                {links.map((l) => {
                    const isActive = active === l.id;
                    return (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            onClick={() => setActive(l.id)}
                            className={[
                                "transition",
                                isActive
                                    ? "text-[#ff2e3a]"
                                    : "text-white/85 hover:text-[#ff2e3a]"
                            ].join(" ")}
                        >
                            {l.label}
                        </a>
                    );
                })}
            </div>
        </nav>
        </header>
    );
}
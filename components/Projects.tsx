import Image from "next/image";
import { underlineLink } from "@/lib/uiClasses";
import Reveal from "@/components/Reveal";

const projects = [
    {
        title: "Dashboard Financiero",
        description:
            "Aplicación desarrollada con React para registrar ingresos y gastos, visualizar balances mensuales y analizar categorías con gráficos dinámicos.",
        demo: "https://dashboard-finanzas-zeta.vercel.app/",
        image: "/projects/dashboard.png",
    },
    {
        title: "Gestor de Turnos Médicos",
        description:
            "Sistema de gestión de turnos con estados dinámicos, filtros y persistencia local. Pensado como un MVP adaptable a distintos sistemas de reservas.",
        demo: "https://gestor-turnos-medicos.vercel.app/",
        image: "/projects/turnos.png",
    },
    {
        title: "Ticketera de Conciertos",
        description:
            "Proyecto académico de ticketera con flujo de compra, listado de eventos y estructura MVC en PHP (CodeIgniter 3).",
        demo: null,
        github: "https://github.com/MateSalomon15/ticketera-conciertos/blob/main/README.md",
        image: "/projects/ticketeraking2.webp",
    },
];

export default function Projects() {
    return (
        <section id="proyectos" className="py-28 scroll-mt-28">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
                <Reveal>
                    <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        <span className="relative inline-block">
                            Proyectos
                            <span className="absolute left-1/2 -bottom-2 h-[6px] w-28 -translate-x-1/2 rounded-full bg-[#ff2e3a]" />
                        </span>
                    </h2>
                </Reveal>
                <div className="mt-20 md:mt-24 space-y-32">
                    {projects.map((project, index) => (
                        <Reveal key={project.title} delayMs={index * 80}>
                            <div key={project.title}
                                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Imagen */}
                                <div className="relative isolate w-full md:w-1/2 h-[300px] md:h-[380px] group">
                                    {/* BLOQUE ROJO DETRÁS (siempre atrás) */}
                                    <div
                                        className={[
                                            "pointer-events-none absolute inset-0 z-0 rounded-2xl",
                                            "bg-[#ff2e3a]/90",
                                            "translate-x-3 translate-y-3",
                                            "blur-[0.5px]",

                                            
                                            "transform-gpu [will-change:transform] [backface-visibility:hidden]",

                                            // hover: solo transform (no opacity)
                                            "transition-transform duration-500",
                                            "md:group-hover:translate-x-6 md:group-hover:translate-y-6",
                                        ].join(" ")}
                                    />

                                    {/* IMAGEN PRINCIPAL (siempre arriba) */}
                                    <div
                                        className={[
                                            "relative z-10 rounded-2xl overflow-hidden",
                                            "border border-white/10 bg-white/5 backdrop-blur",
                                            "transform-gpu [will-change:transform] [backface-visibility:hidden]",
                                            "transition-transform duration-500",
                                            "md:group-hover:-translate-x-2 md:group-hover:-translate-y-2",
                                        ].join(" ")}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={1200}
                                            height={800}
                                            className="object-cover w-full h-[300px] md:h-[380px]"
                                        
                                        />
                                    </div>
                                </div>

                                {/* Texto */}
                                <div className="md:w-1/2 space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-white/70 leading-relaxed text-lg">
                                        {project.description}
                                    </p>

                                    <div className="flex gap-6 items-center">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={underlineLink}
                                            >
                                                Ver proyecto <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                            </a>
                                        )}

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={underlineLink}
                                            >
                                                Ver código <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
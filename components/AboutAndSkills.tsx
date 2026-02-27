import Image from "next/image";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiFigma,
    SiBootstrap,
    SiPhp,
    SiMysql,
    SiVite,
    SiGit,
} from "react-icons/si";
import Reveal from "@/components/Reveal";

const skills = [
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "React", Icon: SiReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Vite", Icon: SiVite },
    { name: "Bootstrap", Icon: SiBootstrap },
    { name: "PHP", Icon: SiPhp },
    { name: "MySQL", Icon: SiMysql },
    { name: "Git", Icon: SiGit },
    { name: "Figma", Icon: SiFigma },
];

export default function AboutAndSkills() {
    return (
        <section id="acerca" className="py-28 scroll-mt-28">
            <div className="max-w-6xl mx-auto px-8">
                <Reveal>
                    <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        <span className="relative inline-block">
                            Acerca de mí
                            <span className="absolute left-1/2 -bottom-2 h-[6px] w-28 -translate-x-1/2 rounded-full bg-[#ff2e3a]" />
                        </span>
                    </h2>
                </Reveal>
                <div className="mt-16 md:mt-20 grid gap-10 md:grid-cols-2 md:items-start">
                    <Reveal>
                        {/* IZQUIERDA */}
                        <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                            <div className="flex items-center gap-4">
                                {/* Foto guardada en /public/me.jpg) */}
                                <div className="group">
                                    <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 shadow-lg shadow-black/40">
                                        <Image
                                            src="/me.jpg"
                                            alt="Foto de Mateo Salomon"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="text-white/80">
                                Soy estudiante avanzado de la{" "}
                                <span className="text-white font-medium">Licenciatura en Sistemas</span> en la{" "}
                                <span className="text-white font-medium">Universidad Nacional de Lanús</span> y vivo en{" "}
                                <span className="text-white font-medium">Buenos Aires</span>.
                            </p>

                            <p>
                                Me interesa el diseño y cómo las interfaces influyen en la experiencia de las personas.
                                Por eso decidí especializarme en{" "}
                                <span className="text-[#ff2e3a] font-medium">desarrollo frontend</span>, donde combino lógica,
                                estructura y creatividad para construir productos digitales claros y útiles.
                            </p>

                            <p>
                                Actualmente busco seguir creciendo como Frontend Developer, aportando claridad, orden y buenas prácticas en cada proyecto.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delayMs={120}>
                        {/* DERECHA */}
                        <div>
                            <p className="text-sm text-white/60">
                                Tecnologías
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3 ">
                                {skills.map(({ name, Icon }) => (
                                    <div
                                        key={name}
                                        title={name}
                                        aria-label={name}
                                        className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300
                                        hover:border-[#ff2e3a]/60 hover:bg-white/10 hover:shadow-[0_0_0_3px_rgba(255,46,58,0.15)]
                                        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ff2e3a]/15"
                                    >
                                        <Icon className="text-4xl text-white/80 group-hover:text-[#ff2e3a] transition" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-16 h-px w-full bg-white/10">
                    <div className="h-px w-24 bg-[#ff2e3a]" />
                </div>
            </div>
        </section>
    );
}
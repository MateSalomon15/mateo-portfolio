import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="mt-28 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#ff2e3a]" />
            <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-10">
                <div className="flex flex-col items-center gap-4 text-center">
                    {/* Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/mateo-salom%C3%B3n-b9b522214/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-[#ff2e3a]/40 hover:text-white"
                        >
                            <SiLinkedin className="text-xl group-hover:text-[#ff2e3a] transition" />
                        </a>

                        <a
                            href="mailto:mateo.a.salomon@gmail.com"
                            aria-label="Email"
                            className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-[#ff2e3a]/40 hover:text-white"
                        >
                            <HiOutlineMail className="text-2xl group-hover:text-[#ff2e3a] transition" />
                        </a>
                    </div>

                    {/* Texto */}
                    <p className="text-sm text-white/60">
                        Mateo Salomon <span className="text-white/30">©</span> 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}
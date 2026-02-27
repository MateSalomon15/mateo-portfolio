import { wipeButton, wipeInner } from "@/lib/uiClasses";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center scroll-mt-28">
        {/* partículas hero */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {[...Array(10)].map((_, i) => (
    <span
      key={i}
      className="absolute rounded-full bg-white"
      style={{
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
        opacity: 0.25 + Math.random() * 0.3,
        animation: `ms-hero-float ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 5}s infinite`,
      }}
    />
  ))}
</div>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
            <span className="text-[#ff2e3a]">M</span>ateo{" "}
            <span className="text-[#ff2e3a]">S</span>alomon
          </h1>

          <p className="mt-6 text-xl text-white/85">Frontend Developer</p>
          <p className="mt-3 text-white/65 leading-relaxed">
            Me enfoco en crear interfaces claras, simples y funcionales.
          </p>

          <div className="mt-10">
            <a href="#proyectos" className={wipeButton}>
              <span className={wipeInner}>Ver proyectos</span>
            </a>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-white/10">
          <div className="h-px w-24 bg-[#ff2e3a]" />
        </div>
      </div>
    </section>
  );
}
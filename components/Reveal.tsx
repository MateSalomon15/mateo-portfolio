"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;   // para escalonar animaciones
  once?: boolean;     // animar 1 sola vez
};

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      {
        threshold: 0.15,       // cuanto tiene que entrar en pantalla
        rootMargin: "0px 0px -10% 0px", // dispara un poco antes
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        show ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-[2px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
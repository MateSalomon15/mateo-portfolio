"use client";

import { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { wipeButton, wipeInner } from "@/lib/uiClasses";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

type Fields = {
    name: string;
    email: string;
    message: string;
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);

    const [status, setStatus] = useState<Status>("idle");
    const [fields, setFields] = useState<Fields>({
        name: "",
        email: "",
        message: "",
    });

    const [touched, setTouched] = useState<Record<keyof Fields, boolean>>({
        name: false,
        email: false,
        message: false,
    });

    const errors = useMemo(() => {
        const e: Partial<Record<keyof Fields, string>> = {};

        if (fields.name.trim().length < 2) e.name = "Escribí tu nombre (mínimo 2 letras).";
        if (!isValidEmail(fields.email)) e.email = "Ingresá un email válido.";
        if (fields.message.trim().length < 10) e.message = "Contame un poco más (mínimo 10 caracteres).";

        return e;
    }, [fields]);

    const hasErrors = Object.keys(errors).length > 0;

    const onChange =
        (key: keyof Fields) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                if (status === "sent") setStatus("idle"); // si ya envió y edita, vuelve a normal
                setFields((prev) => ({ ...prev, [key]: e.target.value }));
            };

    const onBlur = (key: keyof Fields) => () => {
        setTouched((prev) => ({ ...prev, [key]: true }));
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        // forzar mostrar errores si intenta enviar vacío
        setTouched({ name: true, email: true, message: true });

        if (!formRef.current) return;
        if (hasErrors) return;

        try {
            setStatus("sending");

            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
            );

            formRef.current.reset();

            setFields({
                name: "",
                email: "",
                message: "",
            });

            setTouched({
                name: false,
                email: false,
                message: false,
            });

            setStatus("sent");
        } catch (err: any) {
            console.error("EmailJS error:", err);
            setStatus("error");
        }
    };

    return (
        <section id="contacto" className="py-28 scroll-mt-28">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
                <Reveal>
                    <div className="mb-10 md:mb-12">
                        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                            <span className="relative inline-block">
                                Contacto
                                <span className="absolute left-1/2 -bottom-2 h-[6px] w-28 -translate-x-1/2 rounded-full bg-[#ff2e3a]" />
                            </span>
                        </h2>
                    </div>
                </Reveal>

                <p className="text-center text-white/60 text-lg">
                    Si te interesa mi perfil o querés conversar sobre oportunidades, podés escribirme acá.
                </p>
                <Reveal delayMs={120}>
                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="mt-16 mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur"
                    >

                        {/* Nombre */}
                        <div className="space-y-2">
                            <input
                                name="name"
                                value={fields.name}
                                onChange={onChange("name")}
                                onBlur={onBlur("name")}
                                placeholder="Nombre"
                                className={[
                                    "w-full rounded-xl bg-white/5 border px-4 py-3 text-white outline-none transition",
                                    touched.name && errors.name ? "border-[#ff2e3a]" : "border-white/10 focus:border-[#ff2e3a]/70 focus:ring-4 focus:ring-[#ff2e3a]/15",
                                ].join(" ")}
                            />
                            {touched.name && errors.name && <p className="text-sm text-[#ff2e3a]">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <input
                                name="email"
                                type="email"
                                value={fields.email}
                                onChange={onChange("email")}
                                onBlur={onBlur("email")}
                                placeholder="Email"
                                className={[
                                    "w-full rounded-xl bg-white/5 border px-4 py-3 text-white outline-none transition",
                                    touched.email && errors.email ? "border-[#ff2e3a]" : "border-white/10 focus:border-[#ff2e3a]/70 focus:ring-4 focus:ring-[#ff2e3a]/15",
                                ].join(" ")}
                            />
                            {touched.email && errors.email && <p className="text-sm text-[#ff2e3a]">{errors.email}</p>}
                        </div>

                        {/* Mensaje */}
                        <div className="space-y-2">
                            <textarea
                                name="message"
                                value={fields.message}
                                onChange={onChange("message")}
                                onBlur={onBlur("message")}
                                rows={6}
                                placeholder="Mensaje"
                                className={[
                                    "w-full rounded-xl bg-white/5 border px-4 py-3 text-white outline-none transition resize-none",
                                    touched.message && errors.message ? "border-[#ff2e3a]" : "border-white/10 focus:border-[#ff2e3a]/70 focus:ring-4 focus:ring-[#ff2e3a]/15",
                                ].join(" ")}
                            />
                            {touched.message && errors.message && <p className="text-sm text-[#ff2e3a]">{errors.message}</p>}
                        </div>

                        {/* Botón */}
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className={[
                                wipeButton,
                                status === "sending" ? "opacity-60 cursor-not-allowed" : "",
                                hasErrors ? "border-white/15 text-white/70 before:bg-white/10 hover:text-white" : "",
                            ].join(" ")}
                        >
                            <span className={[wipeInner, "inline-flex items-center gap-3"].join(" ")}>
                                {status === "sending" && <Spinner />}
                                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                            </span>
                        </button>

                        {/* Mensajes */}
                        {status === "sent" && (
                            <div className="mt-6 text-sm text-white/70">
                                <span className="text-white font-medium">
                                    Mensaje enviado.
                                </span>{" "}
                                Gracias por escribirme!
                            </div>
                        )}

                        {status === "error" && (
                            <div className="mt-4 rounded-2xl border border-[#ff2e3a]/30 bg-white/5 p-4 text-white">
                                <p className="font-semibold">No se pudo enviar.</p>
                                <p className="text-white/80 mt-1">
                                    Probá de nuevo o escribime a{" "}
                                    <a className="text-[#ff2e3a] font-semibold" href="mailto:mateo.a.salomon@gmail.com">
                                        mateo.a.salomon@gmail.com
                                    </a>
                                </p>
                            </div>
                        )}
                    </form>
                </Reveal>
            </div>
        </section>
    );
}

function Spinner() {
    return (
        <span
            className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin
                 shadow-[0_0_18px_rgba(255,255,255,0.15)]"
            aria-hidden="true"
        />
    );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const parcelRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .fromTo(
          ".hero-eyebrow",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(
          ".hero-line",
          { yPercent: 110, opacity: 0, rotateX: -35 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.1,
            stagger: 0.16,
          },
          "-=0.3"
        )
        .fromTo(
          parcelRef.current,
          { opacity: 0, y: 100, scale: 0.8, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1.3,
            ease: "back.out(1.4)",
          },
          "-=0.5"
        )
        .fromTo(
          detailsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );

      gsap.to(parcelRef.current, {
        y: -18,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.8,
      });

      gsap.to(parcelRef.current, {
        rotateY: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#080808] px-6 text-white"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col">
        <nav className="flex items-center justify-between border-b border-white/15 py-6">
          <a
            href="/"
            className="font-sans text-2xl font-extrabold tracking-[-0.09em]"
          >
            slotly<span className="text-[#777777]">.</span>
          </a>

          <div className="hidden items-center gap-9 font-sans text-[11px] tracking-wide text-[#999999] md:flex">
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How it works
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </div>

          <a
            href="/signup"
            className="border border-white px-5 py-3 font-sans text-xs font-semibold transition hover:bg-white hover:text-black"
          >
            Get started
          </a>
        </nav>

        <main className="flex flex-1 flex-col items-center justify-center py-12">
          <div className="w-full text-center">
            <p className="hero-eyebrow mb-8 font-sans text-[10px] uppercase tracking-[0.4em] text-[#929292]">
              A new perspective on delivery
            </p>

            <h1
              ref={titleRef}
              className="flex flex-col items-center font-display uppercase leading-[0.78] tracking-[-0.035em]"
            >
              <span className="overflow-hidden py-[0.04em]">
                <span className="hero-line block text-[clamp(5rem,11vw,10rem)]">
                  YOUR
                </span>
              </span>

              <span className="overflow-hidden py-[0.04em]">
                <span className="hero-line block text-[clamp(5rem,11vw,10rem)]">
                  DAY.
                </span>
              </span>

              <span className="overflow-hidden py-[0.04em]">
                <span className="hero-line block text-[clamp(3.8rem,8.5vw,7.5rem)] text-[#929292]">
                  YOUR WAY.
                </span>
              </span>
            </h1>
          </div>

          <div className="relative mt-10 flex w-full flex-1 items-center justify-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[400px] sm:w-[400px]" />

            <div
              ref={parcelRef}
              className="relative z-10"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative h-[125px] w-[165px] sm:h-[155px] sm:w-[210px]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(-12deg) rotateY(-25deg)",
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center border border-[#8A7760] bg-[#8A7760]"
                  style={{ transform: "translateZ(25px)" }}
                >
                  <div className="absolute left-1/2 top-0 h-full w-[35px] -translate-x-1/2 border-x border-[#B19B7E] bg-[#B19B7E]" />
                  <div className="relative z-10 border border-[#C7B69C]/50 px-3 py-2">
                    <span className="font-sans text-[8px] font-semibold tracking-[0.3em] text-[#211B14]">
                      S L O T L Y
                    </span>
                  </div>
                </div>

                <div
                  className="absolute inset-0 border border-[#594A39] bg-[#594A39]"
                  style={{ transform: "translateZ(-25px)" }}
                />

                <div
                  className="absolute left-0 top-0 h-full w-[50px] border border-[#776248] bg-[#776248]"
                  style={{
                    transform: "translateX(-25px) rotateY(-90deg)",
                  }}
                />

                <div
                  className="absolute right-0 top-0 h-full w-[50px] border border-[#776248] bg-[#776248]"
                  style={{
                    transform: "translateX(25px) rotateY(90deg)",
                  }}
                />

                <div
                  className="absolute left-0 top-0 h-[50px] w-full border border-[#C1AC8D] bg-[#C1AC8D]"
                  style={{
                    transform: "translateY(-25px) rotateX(90deg)",
                  }}
                />

                <div
                  className="absolute bottom-0 left-0 h-[50px] w-full bg-[#594A39]"
                  style={{
                    transform: "translateY(25px) rotateX(-90deg)",
                  }}
                />
              </div>
            </div>
          </div>
        </main>

        <footer
          ref={detailsRef}
          className="flex flex-col items-center justify-between gap-5 border-t border-white/15 py-6 sm:flex-row"
        >
          <p className="max-w-[300px] text-center font-sans text-xs leading-6 text-[#858585] sm:text-left">
            A smarter way to receive your packages. Built around your schedule,
            not someone else's.
          </p>

          <a
            href="#experience"
            className="flex items-center gap-4 font-sans text-[10px] uppercase tracking-[0.2em] transition hover:text-[#999999]"
          >
            Discover Slotly
            <span className="text-lg">↓</span>
          </a>

          <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#666666]">
            01 / The experience
          </p>
        </footer>
      </div>
    </section>
  );
}

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
  label: string;
  /** Cards visible per screen on tablet/desktop. */
  perView?: number;
  /** Tailwind min-height for the card row on tablet/desktop. */
  minHeight?: string;
}

const NAV_OFFSET = 60;
const GAP = 20;

/**
 * Pinned mode (>=768px wide, motion allowed, and the whole section fits the screen):
 * vertical scroll moves the cards sideways, reversible, and the section unpins after the
 * last card. Otherwise: plain native horizontal scrolling with full content, no pinning.
 * Either way a thin progress bar shows position.
 */
const HorizontalScroller: React.FC<Props> = ({ header, children, label, perView = 2.5, minHeight = "md:min-h-[clamp(380px,calc(100svh-262px),560px)]" }) => {
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sec = section.current!;
    const vp = viewport.current!;
    const tr = track.current!;
    let ctx: gsap.Context | null = null;
    let timer: number | undefined;

    const setProgress = (p: number) => {
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    };
    const onNativeScroll = () => {
      const max = vp.scrollWidth - vp.clientWidth;
      setProgress(max > 0 ? vp.scrollLeft / max : 0);
    };

    const setup = () => {
      ctx?.revert();
      ctx = null;
      vp.style.overflow = "";
      Object.assign(sec.style, { minHeight: "", display: "", flexDirection: "", justifyContent: "" });
      const wide = window.innerWidth >= 768;
      vp.style.setProperty(
        "--card-w",
        wide ? `${Math.floor((vp.clientWidth - (Math.ceil(perView) - 1) * GAP) / perView)}px` : `${Math.min(Math.floor(vp.clientWidth * 0.82), 340)}px`
      );
      setProgress(0);

      const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fits = sec.getBoundingClientRect().height <= window.innerHeight - NAV_OFFSET;
      const dist = () => Math.max(0, tr.scrollWidth - vp.clientWidth);
      if (!(wide && motionOk && fits) || dist() <= 0) return; // native horizontal scroll

      ctx = gsap.context(() => {
        vp.style.overflow = "hidden";
        // Fill the space under the navbar while pinned, content centred: no empty band
        Object.assign(sec.style, {
          minHeight: `${window.innerHeight - NAV_OFFSET}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        });
        const tween = gsap.to(tr, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: `top top+=${NAV_OFFSET}`,
            end: () => `+=${dist()}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setProgress(self.progress),
          },
        });
        // Keyboard: focusing an off-screen card scrolls the page so the card is revealed
        tr.addEventListener("focusin", (e) => {
          const card = (e.target as HTMLElement).closest("[data-card]") as HTMLElement | null;
          vp.scrollLeft = 0;
          const st = tween.scrollTrigger;
          if (!card || !st) return;
          const x = -Number(gsap.getProperty(tr, "x"));
          if (card.offsetLeft - x >= 0 && card.offsetLeft + card.offsetWidth - x <= vp.clientWidth) return;
          const ratio = Math.min(1, Math.max(0, card.offsetLeft / Math.max(1, dist())));
          window.scrollTo({ top: st.start + ratio * (st.end - st.start), behavior: "auto" });
        });
      }, sec);
    };

    setup();
    const onLoad = () => setup();
    if (document.readyState !== "complete") window.addEventListener("load", onLoad, { once: true });
    vp.addEventListener("scroll", onNativeScroll, { passive: true });
    // Rebuild only on real size changes; ignore small height-only changes
    // (mobile address bar), which would otherwise re-pin mid-scroll.
    let lastW = window.innerWidth;
    let lastH = window.innerHeight;
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w === lastW && Math.abs(h - lastH) < 120) return;
      lastW = w;
      lastH = h;
      window.clearTimeout(timer);
      timer = window.setTimeout(setup, 250);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onLoad);
      vp.removeEventListener("scroll", onNativeScroll);
      ctx?.revert();
    };
  }, [perView]);

  return (
    <section ref={section} className="py-4 md:py-5 bg-gradient-blue-green">
      <div className="container-custom w-full">{header}</div>
      <div className="container-custom w-full">
        <div
          ref={viewport}
          tabIndex={0}
          role="region"
          aria-label={label}
          className="overflow-x-auto snap-x snap-mandatory md:snap-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <div ref={track} className={`flex gap-4 md:gap-5 items-stretch w-max will-change-transform ${minHeight}`}>
            {children}
          </div>
        </div>
        <div className="mt-2 h-1 rounded-full bg-neutral-200 overflow-hidden" aria-hidden="true">
          <div ref={bar} className="h-full w-full bg-primary-500 origin-left" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </section>
  );
};

export const refreshScroll = () => requestAnimationFrame(() => ScrollTrigger.refresh());

export default HorizontalScroller;

export async function loadGsap() {
  if (typeof window === "undefined") return null as any;
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger } as const;
}

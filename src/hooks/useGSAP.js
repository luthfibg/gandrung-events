import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const gsapRef = useRef(gsap);

  useEffect(() => {
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return gsap;
};

// Hook for fade-in animation on scroll
export const useFadeInOnScroll = (ref, options = {}) => {
  const gsap = useGSAP();

  useEffect(() => {
    if (!ref.current) return;

    const {
      delay = 0,
      duration = 1,
      y = 50,
      opacity = 0,
      ease = "power2.out",
      triggerOffset = "top 80%"
    } = options;

    gsap.set(ref.current, { y, opacity });

    gsap.to(ref.current, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start: triggerOffset,
        toggleActions: "play none none reverse"
      }
    });
  }, [ref, options, gsap]);
};

// Hook for stagger animation
export const useStaggerAnimation = (ref, options = {}) => {
  const gsap = useGSAP();

  useEffect(() => {
    if (!ref.current) return;

    const {
      delay = 0,
      duration = 0.8,
      stagger = 0.1,
      y = 30,
      opacity = 0,
      ease = "power2.out",
      triggerOffset = "top 80%"
    } = options;

    const children = ref.current.children;
    if (!children.length) return;

    gsap.set(children, { y, opacity });

    gsap.to(children, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      delay,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start: triggerOffset,
        toggleActions: "play none none reverse"
      }
    });
  }, [ref, options, gsap]);
};

// Hook for hover animations
export const useHoverAnimation = (ref, options = {}) => {
  const gsap = useGSAP();

  useEffect(() => {
    if (!ref.current) return;

    const {
      scale = 1.05,
      duration = 0.3,
      ease = "power2.out"
    } = options;

    const element = ref.current;

    const handleMouseEnter = () => {
      gsap.to(element, { scale, duration, ease });
    };

    const handleMouseLeave = () => {
      gsap.to(element, { scale: 1, duration, ease });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, options, gsap]);
};

// Hook for text reveal animation
export const useTextReveal = (ref, options = {}) => {
  const gsap = useGSAP();

  useEffect(() => {
    if (!ref.current) return;

    const {
      delay = 0,
      duration = 1,
      stagger = 0.1,
      y = 20,
      triggerOffset = "top 80%"
    } = options;

    const words = ref.current.textContent.split(' ');
    ref.current.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

    const wordElements = ref.current.querySelectorAll('.word');

    gsap.set(wordElements, { y, opacity: 0 });

    gsap.to(wordElements, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      delay,
      scrollTrigger: {
        trigger: ref.current,
        start: triggerOffset,
        toggleActions: "play none none reverse"
      }
    });
  }, [ref, options, gsap]);
};

export default useGSAP;

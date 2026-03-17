import { useEffect } from "react";
/* adds .animate to the class when it is seen on website (once) */
const animate = (name: string) => {
  useEffect(() => {
    // Animate panels
    const panels = document.querySelectorAll(name);
    panels.forEach((panel) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              panel.classList.add("animate");
              observer.unobserve(panel);
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(panel);
    });

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);
};

export default animate;

let tl = gsap.timeline({
  repeat: -1,
});

tl.from(".hello span", {
  y: 20,
  duration: 0.75,
  opacity: 0,
  stagger: 0.15,
  ease: "power1.inOut",
});

tl.to(".hello span", {
  y: -20,
  duration: 0.75,
  opacity: 0,
  stagger: 0.15,
  ease: "power1.inOut",
});

tl.from(".namastey span", {
  y: 20,
  duration: 0.75,
  opacity: 0,
  stagger: 0.15,
  ease: "power1.inOut",
});

tl.to(".namastey span", {
  y: -20,
  duration: 0.75,
  opacity: 0,
  stagger: 0.15,
  ease: "power1.inOut",
});

gsap.from("#servicesSec  ul li:nth-child(odd)", {
  x: 40,
  duration: 3,
  stagger: 1,
  scrollTrigger: {
    trigger: "#servicesSec  ul li:nth-child(odd)",
    scroller: "body",
    start: "top 90%",
    scrub: 2,
    end: "top 0",
  },
});

gsap.from("#servicesSec  ul li:nth-child(even)", {
  x: -40,
  duration: 3,
  stagger: 1,
  scrollTrigger: {
    trigger: "#servicesSec  ul li:nth-child(odd)",
    scroller: "body",
    start: "top 90%",
    scrub: 2,
    end: "top 0",
  },
});

const hamBurico = document.getElementById("hamBur-ico");
const hamBurcard = document.getElementById("hamBur-card");
const close = document.getElementById("close");

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    ScrollTrigger.create({
      scroller: "body",
      trigger: hamBurico,
      start: "top -100%",
      onEnter: () =>
        gsap.to(hamBurico, {
          display: "flex",
          opacity: 1,
          top: 12,
          duration: 0.5,
          ease: "power3.inOut",
        }),
      onLeaveBack: () =>
        gsap.to(hamBurico, {
          display: "none",
          opacity: 0,
          top: 24,
          duration: 0.5,
          ease: "power3.inOut",
        }),
    });

    gsap.from("#card2", {
      scrollTrigger: {
        trigger: ".card2",
        scrub: 0.5,
        start: "top bottom",
        end: "80% top",
      },
      y: 300,
    });
    gsap.to("#card1", {
      scrollTrigger: {
        trigger: ".card1",
        scrub: 0.5,
        start: "top bottom",
        end: "80% top",
      },
      y: 200,
    });
  },
});

hamBurico.addEventListener("click", () => {
  gsap.to(hamBurcard, {
    x: 0,
    ease: "power3.inOut",
  });
  gsap.to(hamBurico, {
    x: -50,
    scale: 0,
  });
});

close.addEventListener("click", () => {
  gsap.to(hamBurcard, {
    x: 300,
    ease: "power3.inOut",
  });
  gsap.to(hamBurico, {
    x: 0,
    scale: 1,
  });
});

gsap.to(".scroller", {
  x: "-100%",
  duration: 7,
  repeat: -1,
  ease: "none",
});

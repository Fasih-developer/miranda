const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let timeline = gsap.timeline()
timeline
.to('.main', {
    y:'100vh',
    duration:0,
    scale:0.4
})
.to('.main', {
    y:'-150vh',
    ease:'power1.inOut',
    delay:1,
    duration:.7
})
.to('.main', {
    y:'0vh',
    rotate:-720,
    delay:.2,
    scale:1,
    ease:'power3.inOut',
    duration:2
})
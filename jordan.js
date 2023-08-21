
var tl = gsap.timeline();
tl.from("#fs img",{
    scale: 0,
    duration: 2,
    opacity:0
})
tl.from("#fs",{
    opacity:1,
    duration:2,
    delay:-1
})
tl.from("#top-nav",{
    y: -100,
    opacity: 0,
    duration: 2,
    delay:-1.2
})
tl.from("#left h2",{
    x: -100,
    opacity: 0,
    duration: 2,
    delay: -1.2
})
tl.from("#left h1",{
    x: -100,
    opacity: 0,
    duration: 2,
    delay: -1.2
})
tl.from("#left i",{
    x: -100,
    opacity: 0,
    duration: 2,
    delay: -1.2
})
tl.from("#left p",{
    x: -100,
    opacity: 0,
    duration: 2,
    delay: -1.2
})
tl.from("#left button",{
    opacity:0,
    scale: 0.6,
})
tl.from("#bottum-nav",{
    y:100,
    opacity:0,
    duration:2,
    delay:-1.2
})

tl.from("#main img",{
    opacity: 0,
    duration:2,
    delay:-1.2,
    transform: "rotateY(160deg) rotateZ(10deg)",
})
.from("#main #backtitle",{
    opacity: 0,
    duration:2,
    scale:0.6,
    delay:-1.2,
})
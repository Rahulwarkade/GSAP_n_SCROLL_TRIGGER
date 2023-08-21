
gsap.to("#box",{
    x:1380,
    duration: 2,
    ease: "expo.in",
    backgroundColor: "green",
    borderRadius: "50%",
})

gsap.to("#box",{
    delay:2,
    y:610,
    duration: 2,
    ease: "expo.in",
    backgroundColor: "red",
    borderRadius: "0%",
})
gsap.to("#box",{
    delay:4,
    y:610,
    x:0,
    duration: 2,
    ease: "expo.in",
    backgroundColor: "brown",
    borderRadius: "50%",
})
gsap.to("#box",{
    delay:6,
    y:0,
    x:0,
    duration: 2,
    ease: "expo.in",
    backgroundColor: "royalblue",
    borderRadius: "0%",
})
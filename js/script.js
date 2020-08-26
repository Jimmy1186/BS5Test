
let tl = gsap.timeline();



tl.from(".titleBox",{left:-1000,ease: "ease",duration: 1 })
.from('.h1Title',{opacity:0,ease: "power4.out",duration: 0.3 })

gsap.from(".detail",{
 scrollTrigger:{
  trigger:".detail"
 },
 opacity:0,
 duration: 1,
 scrub: 1,
    once: true
})
gsap.from(".card",{
 scrollTrigger:{
  trigger:".card"
 },
 pin: true,
 opacity:1,
 duration: 0.3,
 scrub: 1,
 once: true

})

gsap.from(".card-img-top",{
 scrollTrigger:{
  trigger:".card"
 },
 opacity:0,
 duration: 3,
 scrub: 1,
 once: true

})





gsap.from(".moreDetail",{
 scrollTrigger:{
  trigger:".moreDetail"
 },
 opacity:0,
 duration: 0.3,
 scrub: 1,
 once: true

})
gsap.from(".foot",{
 scrollTrigger:{
  trigger:".foot"
 },
 opacity:0,
 top:100,
 duration: 0.6,
 scrub: 1,
 once: true

})
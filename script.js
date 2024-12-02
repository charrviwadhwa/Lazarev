function navanimations() {
var nav = document.querySelector("nav")
nav.addEventListener("mouseenter",()=>{
    let tl = gsap.timeline()

    tl.to("#nav_bottom",{
        height:"22vh",
       
    })
    tl.to(".nav1 h5",{
        display:"block",
        duration:0.2
    })
    tl.to(".nav1 h5 span",{
        y:0,
        stagger:{
            amount:0.6
        }
    })
})
nav.addEventListener("mouseleave",()=>{
    let tl = gsap.timeline()

    tl.to(".nav1 h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav1 h5",{
       display:"none",
       duration:0.1
    })
    tl.to("#nav_bottom",{
       height:0,
      
    })
    
    
    
})
}
navanimations();


function pg2animation()
{const elem = document.querySelectorAll("#right1")
elem.forEach(function(e){
    e.addEventListener("mouseenter",()=>{
        gsap.to(e.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    e.addEventListener("mouseleave",()=>{
        gsap.to(e.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    e.addEventListener("mousemove",(dets)=>{
        gsap.to(e.childNodes[3],{
            x:dets.x-e.getBoundingClientRect().x-90,
            y:dets.y-e.getBoundingClientRect().y-210

        })
    })
})}

pg2animation();
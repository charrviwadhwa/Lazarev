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

function pg3_video() {
    const pg_centre = document.querySelector("#pg_centre")
const video  =  document.querySelector("#pg3 video")
pg_centre.addEventListener('click',function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })

})}

pg3_video()

const pg4 = document.querySelector("#pg4_left")
pg4.addEventListener("scroll",function(){
    console.log("scroll");
    
    let tl =gsap.timeline()
    tl.to("h2"),{
        y:0,
        stagger:0.2,
    }
})

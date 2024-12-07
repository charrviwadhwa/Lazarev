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

function pg4_animation(){document.addEventListener("DOMContentLoaded", () => {
    const pg4 = document.querySelector("#pg4");

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("pg4 h2 is in view");

                // Animate each line in the h2 separately
                gsap.to("#pg4_left h2 span", {
                    y: 0, // Moves each span to its original position
                    opacity: 1, // Fades each line in
                    duration: 0.8, // Duration of each animation
                    ease: "power3.out", // Smooth easing effect
                    stagger: 0.2, // Adds a delay between each line
                });

                // Stop observing once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 }); // Trigger animation when 50% of #pg4 is visible

    // Start observing the #pg4 element
    observer.observe(pg4);
});
}

pg4_animation()



function pg5_animation()
{const sec=document.querySelectorAll("#pg5_1right")
sec.forEach(function(e){
    e.addEventListener("mouseenter",()=>{
        e.childNodes[3].style.opacity=1
        e.childNodes[3].play()
    })
    e.addEventListener("mouseleave",()=>{
        e.childNodes[3].style.opacity=0
        e.childNodes[3].load()
    })
})}

pg5_animation()

let initialPath = "M 10 100 Q 500 100 990 100"
let finalPath = "M 10 100 Q 500 100 990 100"

let string = document.querySelector("#string");

string.addEventListener("mouseenter", (e) => {
    console.log("mouseenter")
})

string.addEventListener("mousemove", (e) => {
    initialPath = `M 10 100 Q 250 ${e.y} 990 100`
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration:0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", (e) => {
     gsap.to("svg path", {
        attr: { d: finalPath },
        duration:1.5,
        ease: "elastic.out(1,0.2)"
    })
})

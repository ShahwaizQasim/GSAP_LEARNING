
gsap.from(".page1 .box", {
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 360
})

gsap.from(".page3 .box", {
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
        start: "top 50%",
    }
})


// TimeLine 
// GSAP me timeline ek aisa feature hai jo multiple animations ko sequence me chalane ke liye use hota hai — matlab ek animation ke baad doosri, phir teesri… sab
//  ek order me smoothly run karte hain.

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2", // ek hi trigger
        scroller: "body",
        start: "top 50%",
        markers: true,
        scrub: 2  // scrub GSAP ScrollTrigger ka option hota hai jo scroll ko animation ke sath sync karta hai.
    }
});

tl.from(".page2 .box", {
    scale: 0,
    rotate: 360,
    duration: 1
})
    .from(".page2 h1", {
        y: -100,
        opacity: 0,
        duration: 1
    })
    .from(".page2 h2", {
        y: 100,
        opacity: 0,
        duration: 1
    });



gsap.to("#page4 h1", {
    transform: "translateX(-170%)",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: true,
        pin: true
    }
})
